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
    colNum: '4',
    description: (
      <>
        Easily maintainable, Better performance, Increased accessibility, Callbacks, Lifecycles
        & Avoiding code duplications. <a href="/docs/webcomponents" target="_blank">read more</a>
      </>
    ),
  },
  {
    title: <>Directives</>,
    colNum: '4',
    description: (
      <>
        Remove, Append, Modifies DOM element with ease. <a href="/docs/directives" target="_blank">read more</a>
      </>
    ),
  },
  {
    title: <>Data-DOM Synchronization</>,
    colNum: '4',
    description: (
      <>
        Code without stressing about accessing DOM.
       Easier to maintain changing UI. <a href="/docs/binder" target="_blank">read more</a>
      </>
    ),
  },
  {
    title: <>URL transition</>,
    colNum: '4',
    description: (
      <>
        Replace component on respective url change suspected. <a href="/docs/router" target="_blank">read more</a>
      </>
    ),
  },
  {
    title: <>Event delegation</>,
    colNum: '4',
    description: (
      <>
        Most powerful event handling patterns. Single handler to maintain events. <a href="/docs/events" target="_blank">read more</a>
      </>
    )
  },
  {
    title: <>Custom Plugins</>,
    colNum: '4',
    description: (
      <>
        Make your own plugins on top of web components. <a href="/docs/binder#how-to-write-custom-binder-plugins" target="_blank">read more</a>
      </>
    )
  }
];

const development = [
  {
    title: <>
      <a href="https://webpack.js.org/" target="_blank">Webpack</a>
    </>,
    colNum: '6',
    description: (
      <>
        Changes in development will be auto-updated in your browser. Development configuration and application performance are based on webpack configuration, so performance will be very optimal once your webpack is optimized.
      </>
    ),
  },
  {
    title: <>Production run on <a href="https://pm2.keymetrics.io/" target="_blank">PM2</a></>,
    colNum: '6',
    description: (
      <>
        Production run is auto-configured in 'ecosystem.config.js'. If you want, you can also manually configure it according to your specific need.
      </>
    ),
  }
];

const Constributors = () => {
  let contributors = [{
    name: 'Haribalaji Ravi',
    link: 'https://www.instagram.com/haribalajiravi/'
  }, {
    name: 'Ahilesh',
    link: 'https://twitter.com/KumarAhilesh'
  }];
  if ((contributors || []).length === 0) {
    return null;
  }

  const template = contributors.map(contributor => (
    <li key={contributor.link}>
      <a href={contributor.link}>{contributor.name}</a>
    </li>
  ))
  return (
    <div style={{ paddingTop: '40px', paddingBottom: '40px' }}>
      <div style={{ padding: '0px 60px' }}>
        <h1>Contributors</h1>
        <ul>
          {template}
        </ul>
      </div>
    </div>
  )
}

function Feature({ imageUrl, title, description, colNum }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx(`col col--${colNum}`, styles.feature)}>
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
      title={`Welcome to documentation`}
      description="A Javascript Framework with Web Component Life Cycles, Bindings, Directives, Routing and Events">
      <header className={clsx('hero hero--primary', styles.heroBanner)} style={{ height: '380px' }}>
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
        {development && development.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {development.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <Constributors />
        <SupportMe />
      </main>
    </Layout>
  );
}

export default Home;
