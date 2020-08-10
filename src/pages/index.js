import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Web Components</>,
    imageUrl: 'img/webcomponents.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Binder</>,
    imageUrl: 'img/binder.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Router</>,
    imageUrl: 'img/router.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const SupportMe = () => {
  return (
    <div style={{ paddingTop: '30px', paddingBottom: '30px', backgroundColor: '#cccccc', color: '#555555', fontSize: '13pt' }}>
      <div style={{ padding: '0px 60px', textAlign: 'center' }}>
        <h1>Like it? take a second to support me!</h1>
        <div>
          <a href="https://www.patreon.com/haribalajiravi" target="_blank">
            <img src="https://img.shields.io/badge/%20-Become%20a%20patreon%3F-%23555555?logo=patreon&style=for-the-badge" />
          </a>
          <a href="https://www.buymeacoffee.com/7xcFqmn" target="_blank">
              <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style={{ width: '122px', marginLeft: '10px' }} />
            </a>
        </div>
      </div>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A Javascript Framework with Web Component Life Cycles, Bindings, Directives, Routing and Events">
      <header className={clsx('hero hero--primary', styles.heroBanner)} style={{height: '380px'}}>
        <div className="container">
          <img src={`img/creamie.png`} alt="Creamie Logo" style={{ width: '100px' }} />
          <h1 className="hero__title header-title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg ',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <SupportMe />
      </main>
    </Layout>
  );
}

export default Home;
