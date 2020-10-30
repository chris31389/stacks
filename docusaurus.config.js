const remarkImages = require('remark-images');
const rehypeTruncate = require('rehype-truncate');

module.exports = {
  title: "Amido Stacks ",
  tagline:
    "Helping projects gain momentum on digital transformation, with opinionated and modular boilerplate solutions",
  url: "https://amido.github.io",
  baseUrl: "/stacks/",
  onBrokenLinks: "warn",
  favicon: "img/thumbnail_stacks.png",
  organizationName: "Amido", // Usually your GitHub org/user name.
  projectName: "Stacks", // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: "56a3097b6350cd2363a8746a98c6c278",
      indexName: "amido_stacks",

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['csharp', 'docker', 'powershell', 'java', 'bash', 'json'],
    },
    navbar: {
      title: "",
      logo: {
        alt: "Amido Stacks Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        {
          href: "https://github.com/amido/stacks",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
            },
          ],
        },
        {
          title: "About Us",
          items: [
            {
              label: "Amido",
              href: "https://amido.com/",
            },
          ],
        },
        {
          title: "Open Source",
          items: [
            {
              label: "GitHub",
              to: "https://github.com/amido/stacks",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Amido Ltd`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

          remarkPlugins: [remarkImages],
          rehypePlugins: [rehypeTruncate],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        },
      }
    ]
  ]
};
