module.exports = {
  title: 'Creamie',
  tagline: 'A Javascript framework',
  url: 'https://creamie.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/creamie-ico.png',
  organizationName: 'haribalajiravi', // Usually your GitHub org/user name.
  projectName: 'creamie-documentation-v2',
  themeConfig: {
    gtag: {
      trackingID: 'UA-162464001-2',
    },
    algolia: {
      apiKey: 'cda340a7db9f49ba339afa4743bbf077',
      indexName: 'creamie_io'
    },
    navbar: {
      title: 'Creamie',
      logo: {
        alt: 'creamie logo',
        src: 'img/creamie.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/haribalajiravi/creamie',
          label: 'GitHub',
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
              label: 'Command Line Interface (CLI)',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Gitter',
              href: 'https://gitter.im/creamie-cli/community?utm_source=share-link&utm_medium=link&utm_campaign=share-link',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/creamie.io/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/haribalajiravi/creamie',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Haribalaji Ravi. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'installation',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Haribalajiravi/creamie-documentation-v2/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Haribalajiravi/creamie-documentation-v2/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
