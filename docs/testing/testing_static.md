---
id: testing_static_analysis
title: Testing - Static Code Analysis
sidebar_label: Static Code Analysis
description: How to use Jest with SonarCloud
keywords:
  - jest
  - sonarcloud
  - tests
  - testing
  - static
  - code
  - analysis
  - example
  - report
  - static quality gates
---

Amido Stacks projects use [SonarQube](https://docs.sonarqube.org/) for static analysis. 

To enable integrations with GitHub and for use in Azure DevOps CI, the results are then hosted and viewable on [SonarCloud](https://sonarcloud.io/).

SonarCloud offers quality gates that ensure that your standards are adhered to before deploying.

 ![sonarcloud_example](https://amidostacksassets.blob.core.windows.net/docs/assets/sonarcloud_overview.png)
 ![sonarcloud_github](https://amidostacksassets.blob.core.windows.net/docs/assets/sonarcloud_github.png)

SonarCloud supports most languages.

## Getting started

Sign up with GitHub to [Sonarcloud](https://sonarcloud.io) for the Organisation under test. Review the documentation and setup on how to plugin to GitHub.

## Using Jest with SonarCloud

SonarCloud collects the coverage reports generated by Jest in the form of `lcov.info` output. Configuration in the `jest.config.json` file will include the following for code coverage collection.

:::caution Important
To ensure that the `lcov.info` reports with _relative paths_ the root  `"roots": ["<rootDir>/."]` needs to be set. Else then the `lcov` report will embed the root directory in the path, and sonar scanner won't be able to map the coverage to the analysed files.
:::

```json
{
  ...
"roots": ["<rootDir>/."],
"coverageReporters": ["cobertura", "lcov"],
  "collectCoverage": true,
  "collectCoverageFrom": [
    "**/*.{ts,tsx}",
    "!**/*.test.*",
    "!<rootDir>/.*",
    "!**/*config.{js,json}",
    "!<rootDir>/coverage",
    "!<rootDir>/__tests__/**/*",
    "!<rootDir>/__mocks__/**/*"
  ],
  "coverageDirectory": "<rootDir>/coverage/",
  "coverageThreshold": {
    "global": {
      "statements": 1,
      "branches": 1,
      "functions": 1,
      "lines": 1
    }
  }
  ...
}
```

The coverage directory will be where the `lcov` reports are generated.

## Configuring SonarCloud

At the root of the package, a `sonar-project.properties` configuration file can be created, to pull in the required SonarCloud environment variables, including SonarCloud token, project name, where to collect the code coverage report from, and what files should be excluded from analysis.

For all configuration options see [SonarCloud Analysis Parameters](https://sonarcloud.io/documentation/analysis/analysis-parameters/).

To pull in the Jest generated code coverage reports, outputted in the SonarCloud supported `lcov.info` report, the report path can be set in the `sonar-project.properties` file:

```text
# sonar-project.properties
sonar.javascript.lcov.reportPaths=coverage/lcov.info
```

To ensure that SonarCloud doesn't analysis files that are not needed for analysis, please exclude them:

```text
# sonar-project.properties
sonar.exclusions=node_modules/**/*, dist/**/*, coverage/**/*, **/*.test.*, *.config.{js,json}, __tests__/**/*, __mocks__/**/*, ./.*, *.xml, **/*.d.*, **/*.js
```

## amidostacks/ci-sonarscanner

We can run this with Amido Stacks custom container, supports running Sonar Scanner for .NET and NPM projects.

See [amidostacks/ci-sonarscanner](https://hub.docker.com/repository/docker/amidostacks/ci-sonarscanner) for the open source image.

## Static quality gates

To ensure that all code is meeting the quality standards (i.e. code coverage, bugs, security) then we can implement Quality gate checks from the results of the SonarScanner analysis.

### Azure pipelines

:::caution Important
The `amidostacks/ci-sonarscanner` does not fail the pipeline if the quality gate is not passed on SonarCloud. We recommend following one of these implementations:
:::

* [SonarScanner for Azure Devops](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner-for-azure-devops/) or your current pipeline
    * Example usage in the open-source [build-dotnet.yml](https://github.com/amido/stacks-pipeline-templates/blob/831c46811abfeff30833ccb003305692cb7ad2af/azDevOps/azure/templates/jobs/build-dotnet.yml) template step

* Using [SonarLint as an IDE extension](https://www.sonarlint.org) that helps you detect and fix quality issues as you write code.
    * See `[example workspace settings](../.vscode/settings.json)`

* Using [amidostacks/ci-sonarscanner](https://hub.docker.com/repository/docker/amidostacks/ci-sonarscanner)
* [Github Actions with SonarCloud](https://github.com/SonarSource/sonarcloud-github-action) to automatically run analysis triggered by Github

Another option is to have a task running using the container, making static code analysis a breeze in the pipelines and easy to run locally. For an example on how to use the container to run you static code analysis, see [amido/stacks-pipeline-templates](https://github.com/amido/stacks-pipeline-templates/blob/feature/cycle2/azDevOps/azure/templates/v2/steps/test-static-code-sonar.yml)

```yaml
steps:
  - bash: |
      sonar-scanner -v
      sonar-scanner
    displayName: "Static Analysis: SonarScanner Run"
    target:
      container: sonar_scanner
    env:
      SONAR_HOST_URL: https://sonarcloud.io
      SONAR_TOKEN: $SONAR_TOKEN
      SONAR_PROJECT_KEY: $SONAR_PROJECT_KEY
      SONAR_ORGANIZATION: $SONAR_ORGANIZATION
      BUILD_NUMBER: $(Build.BuildNumber)
    workingDirectory: ${{ parameters.workingDirectory }}
```

### Running locally

In order to run, the export the followings environment variables for the
SonarCloud Project:

```bash
export SONAR_TOKEN=
export SONAR_PROJECT_KEY=
export SONAR_ORGANIZATION=
export BUILD_NUMBER=
```

First generate the code coverage results but running the unit tests, then run the SonarCloud scanner and
push up the results for analysis.

```bash
npm run test
```

```bash
docker run -e SONAR_HOST_URL=https://sonarcloud.io -e SONAR_TOKEN=$SONAR_TOKEN -e SONAR_PROJECT_KEY=$SONAR_PROJECT_KEY -e SONAR_ORGANIZATION=$SONAR_ORGANIZATION -e BUILD_NUMBER=1.2.3 -v $(pwd):/usr/src --rm -it amidostacks/ci-sonarscanner /bin/
```

```bash
bash -c 'cd /usr/src && sonar-scanner'
```
