(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(167)),i={id:"getting_started_demo",title:"Using the scaffolding-cli to build an application",sidebar_label:"Using the scaffolding-cli to build an application"},c={unversionedId:"getting_started_demo",id:"getting_started_demo",isDocsHomePage:!1,title:"Using the scaffolding-cli to build an application",description:"npm",source:"@site/docs/getting_started_demo.md",slug:"/getting_started_demo",permalink:"/stacks/docs/getting_started_demo",version:"current",sidebar_label:"Using the scaffolding-cli to build an application"},l=[{value:"Scaffolding-cli",id:"scaffolding-cli",children:[]},{value:"Getting started",id:"getting-started",children:[]},{value:"Prerequisites",id:"prerequisites",children:[{value:"Public cloud",id:"public-cloud",children:[]},{value:"CI/CD tooling",id:"cicd-tooling",children:[]},{value:"Variables and secrets",id:"variables-and-secrets",children:[]}]},{value:"What you get",id:"what-you-get",children:[{value:"OOTB template",id:"ootb-template",children:[]},{value:"Business source code",id:"business-source-code",children:[]}]},{value:"Examples",id:"examples",children:[{value:"Basic",id:"basic",children:[]},{value:"Advanced usage",id:"advanced-usage",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@amidostacks/scaffolding-cli"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/npm/dt/@amidostacks/scaffolding-cli",alt:"npm"})))),Object(o.b)("p",null,"Please refer to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/amido/stacks-webapp-template/tree/master/packages/scaffolding-cli"}),"scaffolding-cli")," package for more information."),Object(o.b)("h2",{id:"scaffolding-cli"},"Scaffolding-cli"),Object(o.b)("p",null,"Templates out a fully functional and deployable project in a variety of flavours.\nIncluding tests (unit, integration), and infrastructure and deployment definitions.\nAll from your CLI."),Object(o.b)("h2",{id:"getting-started"},"Getting started"),Object(o.b)("p",null,"We are using npx to execute and create the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@amidostacks/scaffolding-cli"}),"template-cli"),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/npx"}),"npx"),"."),Object(o.b)("p",null,"We are supporting and running ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodejs.org/en/about/releases/"}),"node@12"),".\nPlease ensure that your local environment has the correct version\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodejs.org/en/download/"}),"installed"),"."),Object(o.b)("p",null,"Additional tools you may want/need to test the outputs locally - this is not required as you could run directly in pipeline - are as follows:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"docker",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"the only real dependencies for local testing as all pipelines are using a shared library of public CI images"),Object(o.b)("li",{parentName:"ul"},"docs on the CI containers used can be found ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/amido/stacks-webapp-template/tree/master/libs/images"}),"here")," links to their public dockerhub pages below:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://hub.docker.com/repository/docker/amidostacks/ci-sonarscanner"}),"sonar-scanner")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://hub.docker.com/repository/docker/amidostacks/ci-tf"}),"terraform-deploy")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://hub.docker.com/repository/docker/amidostacks/ci-k8s"}),"k8s-deploy")))))),Object(o.b)("li",{parentName:"ul"},"dotnet/nodejs/chrome-webdriver/testcafe/sonar-scanner"),Object(o.b)("li",{parentName:"ul"},"optionally (prefer to use the ",Object(o.b)("inlineCode",{parentName:"li"},"docker run -v ..."),"):",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"terraform - v0.12.24"),Object(o.b)("li",{parentName:"ul"},"kubectl - ")))),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"Below are the pre-requisites to get off the ground"),Object(o.b)("h3",{id:"public-cloud"},"Public cloud"),Object(o.b)("p",null,"You will need a public cloud account with one of the following providers. "),Object(o.b)("p",null,"you can find more information around the infrastructure bootstrapping and requirements ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/stacks/docs/infrastructure/azure/infrastructure_code"}),"here"),"."),Object(o.b)("h4",{id:"azure"},"Azure"),Object(o.b)("p",null,"You will need to create, or ask your admin for Azure to create for you, an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-create-service-principal-portal"}),"SPN account")," within a new or existing subscription, that will have the owner privileges. Optionally, you can create 2 to follow security best practice ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/stacks/docs/infrastructure/azure/infrastructure_code####Azure"}),"here"),"."),Object(o.b)("p",null,"This SPN (Service Principal Name) will be used throughout to create and manage resources within the cloud via terraform. You can find additional info on how to use these locally along with recommended usage."),Object(o.b)("h4",{id:"gcp"},"GCP"),Object(o.b)("p",null,"You will need to create a project - preferably 2 one for Terraform state and one for the solution - which you may choose to create 2 of if you want your production cluster to be completely separate."),Object(o.b)("p",null,"You will need to create a service account (or 2 if your state is in a different account) - you will need to take note of the JSON credentials file and store in an environment variable for use in pipelines."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"GOOGLE_CREDENTIALS")," will be a json key with a service account credentials."),Object(o.b)("h3",{id:"cicd-tooling"},"CI/CD tooling"),Object(o.b)("p",null,"You will need access to CI/CD tooling with YAML based input. "),Object(o.b)("h4",{id:"azure-devops"},"Azure DevOps"),Object(o.b)("p",null,"You will require AzureDevops library - Microsoft speak for environment variables that are scoped to your jobs/stages within the pipeline as a bare minimum, instructions on how to create it can be found ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/library/?view=azure-devops"}),"here")),Object(o.b)("p",null,"You will use the credentials from your SPN (Service Principal Name) created above to place the values here:"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://amidostacksassets.blob.core.windows.net/docs/assets/image%20(4).png",alt:"infra_vars",title:"Infra variables"}))),Object(o.b)("p",null,"In this instance it is important that they are named as per above: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"azure_client_id"),Object(o.b)("li",{parentName:"ul"},"azure_client_secret"),Object(o.b)("li",{parentName:"ul"},"azure_subscription_id"),Object(o.b)("li",{parentName:"ul"},"azure_tenant_id")),Object(o.b)("p",null,"As these are used downstream in all interactions with the Azure API to create any kind of infrastructure using Terraform within both shared-services and application layer."),Object(o.b)("p",null,"You can name it whatever you choose, and ensure that your yaml definitions corresponds to it for all pipelines dealing with infrastructure - e.g. infra-pipeline and app/api-pipelines in the ",Object(o.b)("inlineCode",{parentName:"p"},"Infra$Stage")," jobs."),Object(o.b)("p",null,"Similarly you can/should create a set of variables for application level variables that will be used at pipeline runtime to configure your application. By default you will have all tests and anything requiring external tooling disabled."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://amidostacksassets.blob.core.windows.net/docs/assets/image%20(5).png",alt:"app_vars",title:"App Vars"}))),Object(o.b)("p",null,"Please ensure these are scoped correctly you can find it in the YAML under\n",Object(o.b)("inlineCode",{parentName:"p"},"  - group: REPLACE_ME_FOR_LIBRARY_NAME")),Object(o.b)("p",null,"where ",Object(o.b)("inlineCode",{parentName:"p"},"REPLACE_ME_FOR_LIBRARY_NAME")," in this example would correspond to ",Object(o.b)("inlineCode",{parentName:"p"},"amido-stacks-demo-infra")," || ",Object(o.b)("inlineCode",{parentName:"p"},"amido-stacks-demo-app")),Object(o.b)("h4",{id:"jenkins"},"Jenkins"),Object(o.b)("h5",{id:"credentials"},"Credentials"),Object(o.b)("p",null,"You will need to create Credentials objects in Jenkins that the pipeline will use to bootstrap various resources in either GCP or Azure. "),Object(o.b)("p",null,"For GCP credentials you will want to create a file secret with your service account json key.\nNB: if you name something other than ",Object(o.b)("inlineCode",{parentName:"p"},"GCP_KEY")," please update the pipeline definitions as well (simply search and replace)"),Object(o.b)("p",null,"Similarly as with AzureDevops all the global vars are declared at the global scope and picked up in various stages with a few exceptions which will need to be set at a stage level, e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"cluster_name")," | ",Object(o.b)("inlineCode",{parentName:"p"},"dns_pointer_record")," | ",Object(o.b)("inlineCode",{parentName:"p"},"stage")," | ",Object(o.b)("inlineCode",{parentName:"p"},"environment")),Object(o.b)("p",null,"Similarly as with AzureDevops all jobs are running in publicly available CI containers and include all the dependencies for various tooling used. "),Object(o.b)("h3",{id:"variables-and-secrets"},"Variables and secrets"),Object(o.b)("h2",{id:"what-you-get"},"What you get"),Object(o.b)("p",null,"At a high level each of the options within the CLI will roughly provide the same outcome, with tailored code for specific cloud platform and deployment tool combination."),Object(o.b)("p",null,"CSR being the only exception where the infrastructure doesn't cover K8s infrastructure as it is not required."),Object(o.b)("h3",{id:"ootb-template"},"OOTB template"),Object(o.b)("p",null,"Includes a full SDLC for a chosen template app (API/UI/tests) on a specified deployment (CI/CD) platform with the below conceptual stages. However as the output is entirely modular it allows for easy extension by user in deploy steps of either k8s or terraform - user should be able to enrich the generated output with their specific needs."),Object(o.b)("p",null,"Application Layer:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"- CI\n- Unit test\n- Tests...\n- Build (Transpile/compile)\n- Generate Docker Image (except for CSR)\n- Publish Image (Largely relying on Cloud Registries Scanning capabilities)\n    - If you are publishing to registries other than ACR/ECR/GCR\n    - Enable vulnerability scans in the YAML\n- Stage (Dev/test/prod)\n    - Infra\n        - Terraform lib\n            - DNS record \n            - separate ResourceGroup (optional)\n            - CosmosDB (optional)\n            - RedisCache (optional)\n            - metric alarms (optional)\n        - Coming soon... Kubernetes operators\n    - Deploy\n        - kubectl apply || Blob update with React app\n    - Smoke test\n        - Lighthouse/selenium/testcafe\n")),Object(o.b)("p",null,"Infrastructure Layer (Shared Services):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"- Stage (nonprod/prod - this is subjective to user preference, can be dev/test/prod)\n    - infra:\n        - K8s (AKS/GKE/EKS)\n        - Network + subnets\n        - BLOB like storage (blob/S3)\n        - Vault solution\n        - SSL termination (AppGateway)\n        - DNS zone\n    - k8s configuration:\n        - ingress controller - with automatic IP binding and AppGateway integration\n        - pod level identity management (addpodidentity/fargate-profile)\n        - gatekeeper\n")),Object(o.b)("p",null,"tests (in standalone mode):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"lots more info can be found in the testing section ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"./testing/testing.md##Overview"}),"overview"))),Object(o.b)("h3",{id:"business-source-code"},"Business source code"),Object(o.b)("h4",{id:"on-azure"},"On Azure"),Object(o.b)("p",null,"An UI app in React (SSR/CSR flavour):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"- SSR\n    - express mware for authentication using passport \n    - routing set up within nextjs from client to server proxying out to defined endpoints (sample using the yumido sample )\n    - ...\n- CSR:\n    - PKCE integration\n    - API integration\n    - ...\n")),Object(o.b)("p",null,"An API in Java (springboot) and .netcore flavours with:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"CosmosDB integration (deploy/infra/yaml)"),Object(o.b)("li",{parentName:"ul"},"swagger generation")),Object(o.b)("p",null,"Coming soon credential-less auth within azure using pod identity"),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("p",null,"Below are some examples of how to use the CLI for specific outcomes. Please read the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"###Advanced%5C%20%5CUsage"}),"advanced usage")," section on how to apply the output in more complex scenarios."),Object(o.b)("h3",{id:"basic"},"Basic"),Object(o.b)("p",null,"A generated outcome is a fully functioning folder that can be used as an entire repo on a SCM provider of your choice."),Object(o.b)("h4",{id:"create-a-ssr-webapp-from-template"},"Create a SSR webapp from template"),Object(o.b)("p",null,"Creates an amidostacks template in your local directory much like\nexpress-generate with an addition of ",Object(o.b)("inlineCode",{parentName:"p"},"build/, deploy/, docs/, src/")," folders as\nper the Amido Stacks standards."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"npx @amidostacks/scaffolding-cli@latest run -i")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Follow the CLI prompts to create a templated app with user defined\nconfiguration: ssr this is why t - Project Name: ",Object(o.b)("em",{parentName:"p"},"default"),": current directory\n(will create a directory with this name)"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Project Type: ",Object(o.b)("em",{parentName:"li"},"default"),": SSR (server side rendering)"),Object(o.b)("li",{parentName:"ul"},"Platform: ",Object(o.b)("em",{parentName:"li"},"default"),": AKS (Azure Kubernetes Service)"),Object(o.b)("li",{parentName:"ul"},"CI/CD Tooling: ",Object(o.b)("em",{parentName:"li"},"default"),": Azure DevOps"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Navigate to the created project directory to install template dependencies:\ne.g. ${SELECTED_DIR}/$PROJECT_NAME"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{})," ```bash\n cd ${SELECTED_DIR}/$PROJECT_NAME/src/\n npm install\n ```\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Build and run the app:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"```bash\nnpm run build\nnpm run start\n```\n")))),Object(o.b)("p",null,"Open Browser and hit ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000")),Object(o.b)("h3",{id:"advanced-usage"},"Advanced usage"),Object(o.b)("p",null,"Whilst the basic examples are fine for small projects and get you off the ground quickly to have a deployed application securely behind a domain of your choice."),Object(o.b)("h4",{id:"using-monorepo"},"Using Monorepo"),Object(o.b)("p",null,"When you work within a monorepo, you will have to do a few minor adjustments to the generated output. "),Object(o.b)("p",null,"Simply ",Object(o.b)("inlineCode",{parentName:"p"},"cd")," into the root directory of your monorepo and run  the cli as many times as you want to create the desired service components, e.g. a UI (using either CSR/SSR), some APIs and you may want a separate infrastructure and blackbox test directories - to end up with below sample."),Object(o.b)("p",null,"You will want to merge the .gitignore files from each component and place in the root - or if you have an existing one make sure it covers all your application types."),Object(o.b)("p",null,"Since you will probably want to have a shared services type infrastructure controlled from a central place you can ignore or remove  ",Object(o.b)("inlineCode",{parentName:"p"},"deploy/$cloud/infra")," folders (ensure the yaml files are also not used within your pipeline tool). IT IS IMPORTANT HOWEVER TO understand within your project what infrastructure should live with the application - ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/amido/stacks-webapp-template/tree/master/libs/orchestration"}),"Amido Infra libs")," has a variety of OSS libraries you can use within your components e.g. CosmosDB, Blob, Queue, Topic managers for all 3 major clouds. You can also choose to use cloud's own provided templates, always better to opt for a library with a predefined interface  rather than building your definitions for application layer infra. it can be re-used by other components without copy/pasta."),Object(o.b)("p",null,"When a project gets big you will want to have an E2E type tests to ensure regressions aren't introduced and UX is preserved. whilst all components have their own tests that cover units/regressions/etc... a black box test is often (if not always) required in projects of distributed nature."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"```bash\n\u251c\u2500\u2500 menu-api\n\u2502   \u251c\u2500\u2500 aux_scripts\n\u2502   \u251c\u2500\u2500 build\n\u2502   \u2502   \u2514\u2500\u2500 azDevops\n\u2502   \u2502       \u2514\u2500\u2500 azure\n\u2502   \u251c\u2500\u2500 deploy\n\u2502   \u2502   \u251c\u2500\u2500 azure\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 app\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 infra\n\u2502   \u2502   \u2514\u2500\u2500 k8s\n\u2502   \u2502       \u2514\u2500\u2500 app\n\u2502   \u251c\u2500\u2500 docs\n\u2502   \u251c\u2500\u2500 src\n\u2502   \u2502   \u251c\u2500\u2500 api\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Company.Project.API\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Company.Project.API.ComponentTests\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Company.Project.API.ContractTests\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Company.Project.API.Models\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Company.Project.Application.CommandHandlers\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Company.Project.Application.Integration\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Company.Project.Application.QueryHandlers\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Company.Project.CQRS\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Company.Project.CQRS.UnitTests\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Company.Project.Common\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Company.Project.Common.UnitTests\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Company.Project.Domain\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Company.Project.Domain.UnitTests\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Company.Project.Infrastructure\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 Company.Project.Infrastructure.IntegrationTests\n\u2502   \u2502   \u251c\u2500\u2500 tests\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 Functional\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 Performance\n\u2502   \u2502   \u2514\u2500\u2500 ui\n\u2502   \u2514\u2500\u2500 test\n\u2502       \u251c\u2500\u2500 Company.Project.E2E.Selenium\n\u2502       \u2502   \u251c\u2500\u2500 Api\n\u2502       \u2502   \u251c\u2500\u2500 Configuration\n\u2502       \u2502   \u251c\u2500\u2500 Selenium\n\u2502       \u2502   \u2514\u2500\u2500 Tests\n\u2502       \u2514\u2500\u2500 testcafe\n\u2502           \u251c\u2500\u2500 api\n\u2502           \u251c\u2500\u2500 fixtures\n\u2502           \u2514\u2500\u2500 utils\n\u2514\u2500\u2500 node-ssr\n    \u251c\u2500\u2500 aux_scripts\n    \u251c\u2500\u2500 build\n    \u2502   \u2514\u2500\u2500 azDevops\n    \u2502       \u2514\u2500\u2500 azure\n    \u251c\u2500\u2500 deploy\n    \u2502   \u251c\u2500\u2500 azure\n    \u2502   \u2502   \u251c\u2500\u2500 app\n    \u2502   \u2502   \u2514\u2500\u2500 infra\n    \u2502   \u2514\u2500\u2500 k8s\n    \u2502       \u2514\u2500\u2500 app\n    \u251c\u2500\u2500 docs\n    \u251c\u2500\u2500 src\n    \u2502   \u251c\u2500\u2500 __mocks__\n    \u2502   \u2502   \u2514\u2500\u2500 next\n    \u2502   \u251c\u2500\u2500 __tests__\n    \u2502   \u2502   \u251c\u2500\u2500 axe\n    \u2502   \u2502   \u251c\u2500\u2500 cypress\n    \u2502   \u2502   \u251c\u2500\u2500 fixtures\n    \u2502   \u2502   \u2514\u2500\u2500 pact\n    \u2502   \u251c\u2500\u2500 components\n    \u2502   \u2502   \u251c\u2500\u2500 ApiPane\n    \u2502   \u2502   \u251c\u2500\u2500 CreateForm\n    \u2502   \u2502   \u251c\u2500\u2500 Header\n    \u2502   \u2502   \u251c\u2500\u2500 Layout\n    \u2502   \u2502   \u251c\u2500\u2500 Link\n    \u2502   \u2502   \u251c\u2500\u2500 Notifier\n    \u2502   \u2502   \u251c\u2500\u2500 RestaurantList\n    \u2502   \u2502   \u251c\u2500\u2500 RestaurantListItem\n    \u2502   \u2502   \u2514\u2500\u2500 Search\n    \u2502   \u251c\u2500\u2500 compositions\n    \u2502   \u2502   \u251c\u2500\u2500 create\n    \u2502   \u2502   \u2514\u2500\u2500 home\n    \u2502   \u251c\u2500\u2500 config\n    \u2502   \u251c\u2500\u2500 constants\n    \u2502   \u2502   \u2514\u2500\u2500 apis\n    \u2502   \u251c\u2500\u2500 ducks\n    \u2502   \u2502   \u251c\u2500\u2500 add-menu\n    \u2502   \u2502   \u2514\u2500\u2500 get-menus\n    \u2502   \u251c\u2500\u2500 environment-configuration\n    \u2502   \u251c\u2500\u2500 interfaces\n    \u2502   \u251c\u2500\u2500 pages\n    \u2502   \u251c\u2500\u2500 public\n    \u2502   \u2502   \u2514\u2500\u2500 static\n    \u2502   \u251c\u2500\u2500 server\n    \u2502   \u2502   \u251c\u2500\u2500 api\n    \u2502   \u2502   \u251c\u2500\u2500 core\n    \u2502   \u2502   \u2514\u2500\u2500 middlewares\n    \u2502   \u251c\u2500\u2500 services\n    \u2502   \u2502   \u2514\u2500\u2500 menus\n    \u2502   \u251c\u2500\u2500 state-management\n    \u2502   \u2514\u2500\u2500 utils\n    \u2514\u2500\u2500 test\n        \u251c\u2500\u2500 testcafe\n        \u2502   \u251c\u2500\u2500 api\n        \u2502   \u251c\u2500\u2500 fixtures\n        \u2502   \u2514\u2500\u2500 utils\n        \u2514\u2500\u2500 xxAMIDOxx.xxSTACKSxx.E2E.Selenium\n            \u251c\u2500\u2500 Api\n            \u251c\u2500\u2500 Configuration\n            \u251c\u2500\u2500 Selenium\n            \u2514\u2500\u2500 Tests\n\x3c!-- test_selenium --\x3e\n\x3c!-- infra only --\x3e\n\u2500\u2500 node-ssr.bootstrap-config.json\n\u2500\u2500 menu-api.bootstrap-config.json\n```\n")),Object(o.b)("h5",{id:"config-file"},"Config file"),Object(o.b)("p",null,"Each run of the CLI will generate a complete configuration object with values you have specified and a placeholder for those you skipped (or weren't exposed by the CLI). You can re-run the cli pointing to the same folder as many times as you want with different variables. Equally, you can run it in different directory to create the same configuration templates with different project name, repo urls/names etc..."),Object(o.b)("h5",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"```bash\ncd mono_repo_root; \\\nnpx @amidostacks/scaffolding-cli@latest run -c menu-api.bootstrap-config.json\n```\n")),Object(o.b)("p",null,"Where the generated config would look like this: "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'```JSON\n{\n"projectName": "menu-api",\n"projectType": "ssr",\n"platform": "aks",\n"deployment": "azdevops",\n"advancedConfig": true,\n"createConfig": false,\n"cloudRegion": "uksouth",\n"cloudResourceGroup": "string",\n"businessCompany": "company",\n"businessProject": "project",\n"businessDomain": "api",\n"businessComponent": "menu",\n"sourceControlRepoType": "github",\n"sourceControlRepoName": "Name-Of-Repo",\n"sourceControlRepoUrl": "https://github/sample.git",\n"terraformBackendStorage": "replace_terraform_backend_storage",\n"terraformBackendDtorageRg": "replace_terraform_backend_storage_rg",\n"terraformBackendStorageContainer": "replace_terraform_backend_storage_container"\n}\n```\n')),Object(o.b)("p",null,"you can then re-run the cli in the same directory by pointing to a copy of the generated file e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"billing-api"),"  which could look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'```JSON\n{\n"projectName": "billing-api",\n"projectType": "infra",\n"platform": "aks",\n"deployment": "azdevops",\n"advancedConfig": true,\n"createConfig": false,\n"cloudRegion": "uksouth",\n"cloudResourceGroup": "string",\n"businessCompany": "company",\n"businessProject": "project",\n"businessDomain": "api",\n"businessComponent": "menu",\n"sourceControlRepoType": "github",\n"sourceControlRepoName": "Name-Of-Repo",\n"sourceControlRepoUrl": "https://github/sample.git",\n"terraformBackendStorage": "replace_terraform_backend_storage",\n"terraformBackendDtorageRg": "replace_terraform_backend_storage_rg",\n"terraformBackendStorageContainer": "replace_terraform_backend_storage_container"\n}\n```\n')),Object(o.b)("p",null,"NB: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"path to config can an absolute path that is accessible to the CLI (any network or local drive path) e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"npx @amidostacks/scaffolding-cli@latest run -c /var/api/conf/definitions/menu-api.bootstrap-config.json")," "),Object(o.b)("li",{parentName:"ul"},"path to a config can also be a relative, from the location of where the CLI is run from e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"npx @amidostacks/scaffolding-cli@latest run -c ../conf/definitions/menu-api.bootstrap-config.json"))))}p.isMDXComponent=!0},167:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);