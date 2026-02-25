module.exports = {
  title: 'Universal Animations',
  tagline: '184+ Professional Animations for the Modern Web',
  favicon: 'img/favicon.png',

  url: 'https://universal-animations.dev',
  baseUrl: '/',

  organizationName: 'universal-animations',
  projectName: 'universal-animations',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/your-username/universal-animations/edit/main/docs/',
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
      image: 'img/social-card.jpg',
      navbar: {
        title: 'Universal Animations',
        logo: {
          alt: 'Universal Animations Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/your-username/universal-animations',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/introduction',
              },
              {
                label: 'CSS Version',
                to: '/docs/css/quick-start',
              },
              {
                label: 'GSAP Version',
                to: '/docs/gsap/quick-start',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/your-username/universal-animations',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/your-invite',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Changelog',
                href: 'https://github.com/your-username/universal-animations/blob/main/CHANGELOG.md',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Universal Animation Library. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['css', 'javascript', 'typescript', 'bash'],
        theme: 'dark',
      },
    }),
};
