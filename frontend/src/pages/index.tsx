import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React, { useState } from "react";
import styles from "./index.module.css";
import { default as Translate, translate } from "@docusaurus/Translate";

const HomepageHeader = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <header className={styles.heroSection}>
      {showAnnouncement && (
        <div className={styles.announcementPill}>
          <span className={styles.announcementBadge}>NEW</span>
          <span className={styles.announcementText}>
            <Translate
              id="announcement.text"
              values={{ version: <code>v1.5.8</code> }}
            >
              {"Server & Launcher {version} is live!"}
            </Translate>
          </span>
          <Link to="/docs/changelog" className={styles.announcementLink}>
            <Translate id="announcement.read">Read Changelog →</Translate>
          </Link>
          <button
            onClick={() => setShowAnnouncement(false)}
            className={styles.announcementClose}
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      )}

      <div className={styles.heroLayoutGrid}>
        <div className={styles.heroLeftColumn}>
          <Heading as="h1" className={styles.heroTitle}>
            Open Multiplayer
          </Heading>
          <p className={styles.heroSubtitle}>
            <Translate
              id="homepage.heroDescription"
              values={{
                compatibility: <span>fully backwards compatible</span>,
                samp: <strong>San Andreas Multiplayer</strong>,
              }}
            >
              {
                "A modern, high-performance multiplayer mod for GTA: San Andreas that is {compatibility} with {samp}."
              }
            </Translate>
          </p>

          <div className={styles.heroCtaGroup}>
            <Link
              className={clsx("button button--lg", styles.primaryButton)}
              to="/downloads/launcher"
            >
              Download Launcher 🎮
            </Link>
            <div className={styles.secondaryLinksInline}>
              <Link className={styles.secondaryCtaLink} to="/downloads/server">
                Are you a developer? Download the server{" "}
                <span className={styles.ctaInline}>
                  here
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 17V7H7M17 7L7 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.heroRightColumn}>
          <div className={styles.videoFrameContainer}>
            {!playVideo ? (
              <div
                className={styles.videoFallbackPlaceholder}
                onClick={() => setPlayVideo(true)}
                title="Click to play announcement video"
              >
                <div className={styles.playButtonGlowContainer}>
                  <div className={styles.playIconTriangle} />
                </div>
                <div className={styles.videoOverlayGradient} />
              </div>
            ) : (
              <iframe
                className={styles.embeddedYoutubeIframe}
                src="https://www.youtube.com/embed/-PWXXvHe35M?autoplay=1&rel=0"
                title="open.mp Announcement Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

const DeveloperFeatures = () => {
  const features = [
    {
      title: "Powerful Developer API",
      description:
        "Stop fighting legacy limits. Take full control with a modern architecture built for rapid, flexible server development.",
      icon: (
        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 9.00187L15 10.5019L9.5 5.00187L11 3.50188C11.75 2.75188 14.5 1.50188 16.5 3.50188C18.5 5.50188 17.25 8.25187 16.5 9.00187Z" fill="#9083D2" stroke="#9083D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 1L16.5 3.5" stroke="#9083D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.50188 11L5.00187 9.5L10.5019 15L9.00187 16.5C8.25187 17.25 5.50188 18.5 3.50188 16.5C1.50188 14.5 2.75188 11.75 3.50188 11Z" fill="#9083D2" stroke="#9083D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.5 14L11.5 12M1 19L3.5 16.5M6 10.5L8 8.5" stroke="#9083D2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bgImage: "/images/assets/home/cards/card_1.webp",
    },
    {
      title: "Drop-In Compatibility",
      description:
        "Keep your codebase alive. Run your existing SA-MP scripts perfectly from day one, with zero rewrite stress.",
      icon: (
        <svg width="30" height="30" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.1605 12.104C18.0955 12.718 18.0525 14.141 17.0315 14.68L9.8505 18.476C9.56239 18.6284 9.24142 18.708 8.9155 18.708C8.58958 18.708 8.26861 18.6284 7.9805 18.476L0.7995 14.68C-0.2205 14.14 -0.2645 12.718 0.6705 12.104L0.7335 12.144L7.9805 15.976C8.26861 16.1284 8.58958 16.208 8.9155 16.208C9.24142 16.208 9.56239 16.1284 9.8505 15.976L17.0315 12.18C17.0758 12.1563 17.1181 12.131 17.1605 12.104ZM17.1605 8.10401C17.367 8.2408 17.5364 8.42659 17.6536 8.6448C17.7708 8.863 17.8321 9.10683 17.8321 9.35451C17.8321 9.6022 17.7708 9.84603 17.6536 10.0642C17.5364 10.2824 17.367 10.4682 17.1605 10.605L17.0315 10.68L9.8505 14.476C9.58932 14.6141 9.30079 14.6927 9.00564 14.706C8.71049 14.7193 8.41605 14.6671 8.1435 14.553L7.9815 14.476L0.7995 10.68C-0.2205 10.14 -0.2645 8.71801 0.6705 8.10401L0.7335 8.14401L7.9805 11.976C8.24181 12.1143 8.53052 12.1929 8.82586 12.2062C9.12119 12.2195 9.41581 12.1672 9.6885 12.053L9.8505 11.976L17.0315 8.18001C17.0758 8.15632 17.1181 8.13097 17.1605 8.10401ZM9.8505 0.232014L17.0315 4.02801C18.0975 4.59101 18.0975 6.11801 17.0315 6.68001L9.8505 10.477C9.56239 10.6294 9.24142 10.709 8.9155 10.709C8.58958 10.709 8.26861 10.6294 7.9805 10.477L0.7995 6.68001C-0.2665 6.11701 -0.2665 4.59101 0.7995 4.02801L7.9805 0.232014C8.26861 0.0796485 8.58958 0 8.9155 0C9.24142 0 9.56239 0.0796485 9.8505 0.232014Z" fill="#9083D2"/>
        </svg>
      ),
      bgImage: "/images/assets/home/cards/card_2.webp",
    },
    {
      title: "Rock-Solid Core",
      description:
        "Engineered to perform under heavy load. Experience massive player limits without the lag spikes or memory leaks.",
      icon: (
        <svg width="30" height="30" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.73 7.49L17 4.82L9.53 0.15C9.21 -0.05 8.79 -0.05 8.47 0.15L1 4.82L5.27 7.49C6.08 6.29 7.45 5.5 9 5.5C10.55 5.5 11.92 6.29 12.73 7.49ZM13.5 10C13.5 12.14 12 13.92 10 14.38V19.56L17.53 14.85C17.82 14.67 18 14.35 18 14V6.55L13.44 9.4C13.47 9.6 13.5 9.79 13.5 10ZM4.5 10C4.5 9.8 4.53 9.6 4.56 9.4L0 6.55V14C0 14.34 0.18 14.67 0.47 14.85L8 19.56V14.38C6 13.92 4.5 12.14 4.5 10Z" fill="#9083D2"/>
        </svg>
      ),
      bgImage: "/images/assets/home/cards/card_3.jpg",
    },
    {
      title: "Open & Community-Driven",
      description:
        "Built transparently by developers who understand server hosting. No hidden agendas—just pure performance.",
      icon: (
        <svg width="30" height="30" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.50006 2.5C4.50006 1.83696 4.76345 1.20107 5.23229 0.732233C5.70113 0.263392 6.33702 0 7.00006 0C7.6631 0 8.29899 0.263392 8.76783 0.732233C9.23667 1.20107 9.50006 1.83696 9.50006 2.5C9.50006 3.16304 9.23667 3.79893 8.76783 4.26777C8.29899 4.73661 7.6631 5 7.00006 5C6.33702 5 5.70113 4.73661 5.23229 4.26777C4.76345 3.79893 4.50006 3.16304 4.50006 2.5ZM5.50006 6C5.10223 6 4.7207 6.15804 4.4394 6.43934C4.15809 6.72064 4.00006 7.10218 4.00006 7.5V10C4.00006 10.7956 4.31613 11.5587 4.87874 12.1213C5.44135 12.6839 6.20441 13 7.00006 13C7.79571 13 8.55877 12.6839 9.12138 12.1213C9.68399 11.5587 10.0001 10.7956 10.0001 10V7.5C10.0001 7.10218 9.84202 6.72064 9.56072 6.43934C9.27941 6.15804 8.89788 6 8.50006 6H5.50006ZM3.05606 6.97C3.01856 7.14417 2.99979 7.32184 3.00006 7.5V10C2.99996 10.5352 3.10727 11.065 3.31562 11.558C3.52398 12.0509 3.82915 12.4971 4.21306 12.87L4.11306 12.898C3.34474 13.1036 2.52623 12.9956 1.83747 12.5979C1.14871 12.2002 0.646072 11.5452 0.440059 10.777L0.0510592 9.327C9.9767e-05 9.13671 -0.0128796 8.93826 0.0128622 8.74295C0.038604 8.54765 0.102563 8.35933 0.201087 8.18875C0.299611 8.01817 0.43077 7.86866 0.587075 7.74877C0.74338 7.62888 0.92177 7.54095 1.11206 7.49L3.05606 6.97ZM9.78606 12.87C10.1701 12.4972 10.4755 12.0511 10.684 11.5581C10.8926 11.0651 11 10.5353 11.0001 10V7.5C10.9994 7.31733 10.9807 7.14067 10.9441 6.97L12.8871 7.49C13.0775 7.54094 13.2559 7.62891 13.4123 7.74887C13.5687 7.86882 13.6999 8.01843 13.7985 8.18912C13.897 8.35982 13.9609 8.54826 13.9866 8.74367C14.0123 8.93909 13.9992 9.13765 13.9481 9.328L13.5601 10.777C13.4559 11.1659 13.2744 11.5298 13.0266 11.8471C12.7788 12.1644 12.4696 12.4286 12.1176 12.6239C11.7655 12.8192 11.3777 12.9416 10.9773 12.9839C10.577 13.0262 10.1712 12.9875 9.78606 12.87ZM5.92468e-05 4C5.92468e-05 3.46957 0.210773 2.96086 0.585846 2.58579C0.960918 2.21071 1.46963 2 2.00006 2C2.53049 2 3.0392 2.21071 3.41427 2.58579C3.78935 2.96086 4.00006 3.46957 4.00006 4C4.00006 4.53043 3.78935 5.03914 3.41427 5.41421C3.0392 5.78929 2.53049 6 2.00006 6C1.46963 6 0.960918 5.78929 0.585846 5.41421C0.210773 5.03914 5.92468e-05 4.53043 5.92468e-05 4ZM10.0001 4C10.0001 3.46957 10.2108 2.96086 10.5858 2.58579C10.9609 2.21071 11.4696 2 12.0001 2C12.5305 2 13.0392 2.21071 13.4143 2.58579C13.7893 2.96086 14.0001 3.46957 14.0001 4C14.0001 4.53043 13.7893 5.03914 13.4143 5.41421C13.0392 5.78929 12.5305 6 12.0001 6C11.4696 6 10.9609 5.78929 10.5858 5.41421C10.2108 5.03914 10.0001 4.53043 10.0001 4Z" fill="#9083D2"/>
        </svg>
      ),
      bgImage: "/images/assets/home/cards/card_4.jpg",
    },
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresContainer}>
        <div className={styles.featuresHeader}>
          <span className={styles.featuresTagline}>
            Engineered for the community
          </span>
          <Heading as="h2" className={styles.featuresTitle}>
            Everything you need to scale.
          </Heading>
        </div>

        <div className={styles.featuresGrid}>
          {features.map((feat, i) => (
            <div
              key={i}
              className={styles.featureCard}
              style={
                {
                  "--card-bg-image": `url(${feat.bgImage})`,
                } as React.CSSProperties
              }
            >
              <div className={styles.cardBgLayer} />
              <div className={styles.featureIcon}>{feat.icon}</div>
              <Heading as="h3" className={styles.featureCardTitle}>
                {feat.title}
              </Heading>
              <p className={styles.featureCardDesc}>{feat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GetStartedGuide = () => {
  return (
    <section className={styles.getStartedSection}>
      <div className={styles.getStartedContainer}>
        <div className={styles.getStartedHeader}>
          <span className={styles.getStartedTagline}>Jump into the multiverse</span>
          <Heading as="h2" className={styles.getStartedTitle}>
            How to Get Started
          </Heading>
          <p className={styles.getStartedContext}>
            Our standalone custom client is currently a Work In Progress! Right now, open.mp runs as a performance launcher. Our ultimate goal is to break entirely independent from the legacy SA-MP client. Follow these simple steps to get set up:
          </p>
        </div>

        <div className={styles.stepsGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>1</div>
            <Heading as="h3" className={styles.stepTitle}>Download the Base Game</Heading>
            <p className={styles.stepDescription}>
              First, download the clean GTA San Andreas ISO file.
            </p>
            <div className={styles.stepLinks}>
              <a href="https://itsneufox.com/hlm-gtasa.iso" target="_blank" rel="noopener noreferrer" className={styles.stepLinkButton}>
                Download Game (.ISO)
              </a>
              <a href="https://beckzy.net/hlm-gtasa.iso" target="_blank" rel="noopener noreferrer" className={styles.stepLinkSecondary}>
                Mirror Link
              </a>
            </div>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>2</div>
            <Heading as="h3" className={styles.stepTitle}>Run the Installer</Heading>
            <p className={styles.stepDescription}>
              Open the downloaded ISO file. Inside the directory, run the <strong>Install</strong> executable and select <strong>INSTALL GTA SAN ANDREAS</strong>.
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>3</div>
            <Heading as="h3" className={styles.stepTitle}>Apply Hoodlum Patch</Heading>
            <p className={styles.stepDescription}>
              Go to the <code>HOODLUM</code> folder, copy everything inside, and paste/replace the files inside your installation directory:
              <code className={styles.pathCodeBlock}>C:\Program Files (x86)\Rockstar Games\GTA San Andreas</code>
            </p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepNumber}>4</div>
            <Heading as="h3" className={styles.stepTitle}>Launch & Play</Heading>
            <p className={styles.stepDescription}>
              Download our launcher wrapper, specify your GTA San Andreas executable installation directory path, choose your player name, and jump in!
            </p>
            <div className={styles.stepLinks}>
              <Link to="/downloads/launcher" className={styles.stepLinkButton}>
                Download Launcher 🎮
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.getStartedFooter}>
          <div className={styles.videoBox}>
            <Heading as="h4">Prefer a visual setup guide?</Heading>
            <p>Watch this brief walkthrough tutorial video (English):</p>
            <div className={styles.videoWrapper}>
              <video controls className={styles.tutorialVideo}>
                <source src="https://itsneufox.com/djplna.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          <div className={styles.supportBox}>
            <Heading as="h4">Running into layout or configuration issues?</Heading>
            <p>We are here to help you get running smoothly. Join our community dashboard support channels!</p>
            <a href="https://discord.com/invite/samp" target="_blank" rel="noopener noreferrer" className={styles.footerDiscordButton}>
              Join Support Discord 💬
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = (): React.ReactElement => {
  return (
    <Layout
      title="Open Multiplayer"
      description="A multiplayer mod for Grand Theft Auto: San Andreas that is fully backwards compatible with San Andreas Multiplayer"
    >
      <div className={styles.pageBackgroundWrapper}>
        <HomepageHeader />
        <DeveloperFeatures />
        <GetStartedGuide />
      </div>
    </Layout>
  );
};

export default Home;