// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Chatgpt-Java',
  tagline: 'ChatGPT Java SDK、支持OpenAI官方所有接口、开箱即用。',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://chatgpt-java.unfbx.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'unfbx', // Usually your GitHub org/user name.
  projectName: 'chatgpt-java-doc', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh','en'],
  },
  scripts: [
    {
      src: 'https://hm.baidu.com/hm.js?81a9c5d0f2cd996952c1d1cd858a3043',
      async: true
    }
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Grt1228/chatgpt-java-doc/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Grt1228/chatgpt-java-doc/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Chatgpt-Java',
        logo: {
          alt: 'Chatgpt-Java Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '快速开始',
          },
          {to: 'https://javadoc.io/doc/com.unfbx/chatgpt-java', label: 'Java Doc', position: 'left'},
          {
            href: 'https://github.com/Grt1228/chatgpt-java',
            label: 'GitHub',
            position: 'right',
          },
		  {
		    to: 'https://www.unfbx.com',
		    label: 'Blog ',
		    position: 'right',
		  },
        ],
      },
      footer: {
        style: 'dark',
        /**links: [
          {
            title: 'Docs',
            items: [
              {
                label: '快速开始',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'https://unfbx.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Grt1228/chatgpt-java',
              },
            ],
          },
        ],*/
        copyright: `Copyright © ${new Date().getFullYear()} Chatgpt-Java.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
