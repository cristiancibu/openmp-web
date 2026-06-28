import React, { useEffect, type ReactNode } from "react";
import Layout from "@theme-original/Layout";
import type LayoutType from "@theme/Layout";
import type { WrapperProps } from "@docusaurus/types";
import { useLocation } from "@docusaurus/router";
import OpenMPNavbar from "@site/src/components/Navbar";

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  const location = useLocation();
  const path = location.pathname;

  const forceDark =
    path === '/' ||
    path.startsWith('/servers') ||
    path.startsWith('/blog') ||
    path.startsWith('/partners');

  useEffect(() => {
    const html = document.documentElement;
    if (forceDark) {
      html.setAttribute('data-theme', 'dark');
    }
  }, [forceDark]);

  return (
    <>
      <Layout {...props} />
    </>
  );
}
