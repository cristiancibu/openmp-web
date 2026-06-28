import React, { useState } from "react";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router"; // Import Docusaurus's router hook
import Translate from "@docusaurus/Translate";
import clsx from "clsx";
import styles from "./Navbar.module.css";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/openmultiplayer",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z"
          fill="#CECECE"
        />
      </svg>
    ),
  },

  {
    label: "Instagram",
    href: "https://instagram.com/openmultiplayer/",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.8 0H14.2C17.4 0 20 2.6 20 5.8V14.2C20 15.7383 19.3889 17.2135 18.3012 18.3012C17.2135 19.3889 15.7383 20 14.2 20H5.8C2.6 20 0 17.4 0 14.2V5.8C0 4.26174 0.61107 2.78649 1.69878 1.69878C2.78649 0.61107 4.26174 0 5.8 0ZM5.6 2C4.64522 2 3.72955 2.37928 3.05442 3.05442C2.37928 3.72955 2 4.64522 2 5.6V14.4C2 16.39 3.61 18 5.6 18H14.4C15.3548 18 16.2705 17.6207 16.9456 16.9456C17.6207 16.2705 18 15.3548 18 14.4V5.6C18 3.61 16.39 2 14.4 2H5.6ZM15.25 3.5C15.5815 3.5 15.8995 3.6317 16.1339 3.86612C16.3683 4.10054 16.5 4.41848 16.5 4.75C16.5 5.08152 16.3683 5.39946 16.1339 5.63388C15.8995 5.8683 15.5815 6 15.25 6C14.9185 6 14.6005 5.8683 14.3661 5.63388C14.1317 5.39946 14 5.08152 14 4.75C14 4.41848 14.1317 4.10054 14.3661 3.86612C14.6005 3.6317 14.9185 3.5 15.25 3.5ZM10 5C11.3261 5 12.5979 5.52678 13.5355 6.46447C14.4732 7.40215 15 8.67392 15 10C15 11.3261 14.4732 12.5979 13.5355 13.5355C12.5979 14.4732 11.3261 15 10 15C8.67392 15 7.40215 14.4732 6.46447 13.5355C5.52678 12.5979 5 11.3261 5 10C5 8.67392 5.52678 7.40215 6.46447 6.46447C7.40215 5.52678 8.67392 5 10 5ZM10 7C9.20435 7 8.44129 7.31607 7.87868 7.87868C7.31607 8.44129 7 9.20435 7 10C7 10.7956 7.31607 11.5587 7.87868 12.1213C8.44129 12.6839 9.20435 13 10 13C10.7956 13 11.5587 12.6839 12.1213 12.1213C12.6839 11.5587 13 10.7956 13 10C13 9.20435 12.6839 8.44129 12.1213 7.87868C11.5587 7.31607 10.7956 7 10 7Z"
          fill="#CECECE"
        />
      </svg>
    ),
  },

  {
    label: "Twitch",
    href: "https://twitch.tv/openmultiplayer",
    icon: (
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.21 3.93H9.64V8.21H8.21M12.14 3.93H13.57V8.21H12.14M3.57 0L0 3.57V16.43H4.28V20L7.86 16.43H10.71L17.14 10V0M15.71 9.29L12.86 12.14H10L7.5 14.64V12.14H4.28V1.43H15.71V9.29Z"
          fill="#CECECE"
        />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/openmultiplayer",
    icon: (
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0645 8.04531L17.9856 0H16.3453L10.336 6.98547L5.53613 0H0L7.2583 10.5634L0 19H1.64023L7.98653 11.6231L13.0554 19H18.5915L11.0641 8.04531H11.0645ZM8.81808 10.6563L8.08257 9.6045L2.23116 1.2347H4.75045L9.47239 7.9895L10.2077 9.04133L16.3461 17.8214H13.8271L8.81808 10.6568V10.6563Z"
          fill="#CECECE"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/openmultiplayer",
    icon: (
      <svg
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z"
          fill="#CECECE"
        />
      </svg>
    ),
  },
];

const OpenMPNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { pathname } = useLocation(); // Track the current URL path location

  // Helper utility to check if a navigation route is active
  const isActiveRoute = (route: string, isExact = false) => {
    if (isExact) return pathname === route;
    return pathname.startsWith(route);
  };

  return (
    <header className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <Link to="/" className={styles.logo}>
            open<span className={styles.logoAccent}>.mp</span>
          </Link>
        </div>

        <div className={styles.center}>
          <Link
            to="/"
            className={clsx(
              styles.link,
              isActiveRoute("/", true) && styles.linkActive,
            )}
          >
            <Translate id="nav.home">Home</Translate>
          </Link>

          <Link
            to="/servers"
            className={clsx(
              styles.link,
              isActiveRoute("/servers") && styles.linkActive,
            )}
          >
            Servers
          </Link>

          <Link
            to="/blog"
            className={clsx(
              styles.link,
              isActiveRoute("/blog") && styles.linkActive,
            )}
          >
            Blog
          </Link>

          <Link
            to="/partners"
            className={clsx(
              styles.link,
              isActiveRoute("/partners") && styles.linkActive,
            )}
          >
            Partners
          </Link>

          <Link
            to="/docs"
            className={clsx(
              styles.link,
              isActiveRoute("/docs") && styles.linkActive,
            )}
          >
            Docs
          </Link>
        </div>

        <div className={styles.right}>
          <div
            className={styles.dropdownContainer}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={clsx(
                styles.dropdownTrigger,
                dropdownOpen && styles.dropdownTriggerActive,
              )}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14H2C1.46957 14 0.960859 13.7893 0.585786 13.4142C0.210714 13.0391 0 12.5304 0 12V6H14V12ZM2.5 11C2.36739 11 2.24021 11.0527 2.14645 11.1464C2.05268 11.2402 2 11.3674 2 11.5C2 11.6326 2.05268 11.7598 2.14645 11.8536C2.24021 11.9473 2.36739 12 2.5 12H8.5C8.63261 12 8.75979 11.9473 8.85355 11.8536C8.94732 11.7598 9 11.6326 9 11.5C9 11.3674 8.94732 11.2402 8.85355 11.1464C8.75979 11.0527 8.63261 11 8.5 11H2.5ZM2.5 8C2.36739 8 2.24021 8.05268 2.14645 8.14645C2.05268 8.24021 2 8.36739 2 8.5C2 8.63261 2.05268 8.75979 2.14645 8.85355C2.24021 8.94732 2.36739 9 2.5 9H7.5C7.63261 9 7.75979 8.94732 7.85355 8.85355C7.94732 8.75979 8 8.63261 8 8.5C8 8.36739 7.94732 8.24021 7.85355 8.14645C7.75979 8.05268 7.63261 8 7.5 8H2.5ZM9.5 8C9.36739 8 9.24021 8.05268 9.14645 8.14645C9.05268 8.24021 9 8.36739 9 8.5C9 8.63261 9.05268 8.75979 9.14645 8.85355C9.24021 8.94732 9.36739 9 9.5 9H11.5C11.6326 9 11.7598 8.94732 11.8536 8.85355C11.9473 8.75979 12 8.63261 12 8.5C12 8.36739 11.9473 8.24021 11.8536 8.14645C11.7598 8.05268 11.6326 8 11.5 8H9.5ZM12 0C12.5304 0 13.0391 0.210714 13.4142 0.585786C13.7893 0.960859 14 1.46957 14 2V5H0V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H12ZM9.74 1C9.60047 0.999861 9.46374 1.03917 9.34559 1.1134C9.22744 1.18763 9.13268 1.29376 9.07226 1.41953C9.01183 1.5453 8.98819 1.68559 9.00407 1.82421C9.01995 1.96284 9.0747 2.09415 9.162 2.203L10.414 3.768C10.4843 3.85596 10.5734 3.92697 10.6749 3.97577C10.7763 4.02457 10.8874 4.04991 11 4.04991C11.1126 4.04991 11.2237 4.02457 11.3251 3.97577C11.4266 3.92697 11.5157 3.85596 11.586 3.768L12.838 2.203C12.9249 2.09404 12.9793 1.96278 12.995 1.82429C13.0106 1.68581 12.9869 1.54571 12.9266 1.42009C12.8662 1.29447 12.7717 1.18842 12.6537 1.11411C12.5358 1.0398 12.3994 1.00025 12.26 1H9.74Z"
                  fill="white"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={styles.dropdownItem}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.itemIcon}>{social.icon}</span>

                    <span className={styles.itemLabel}>{social.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://discord.com/invite/samp"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.discordButton}
          >
            <span className={styles.discordContent}>
              <span>Join</span>
              <img
                src="/images/assets/components/header/Discord-Logo-White.svg"
                alt="Discord Logo"
                className={styles.discordIcon}
              />
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default OpenMPNavbar;
