import React, {type ReactNode} from 'react';
import Navbar from '@theme-original/Navbar';
import type NavbarType from '@theme/Navbar';
import type {WrapperProps} from '@docusaurus/types';
import { useLocation } from '@docusaurus/router';
import OpenMPNavbar from '@site/src/components/Navbar';

type Props = WrapperProps<typeof NavbarType>;

export default function NavbarWrapper(props: Props): ReactNode {
  const location = useLocation();
  const path = location.pathname;

  const useCustomNavbar =
    path === '/' ||
    path.startsWith('/servers') ||
    path.startsWith('/blog') ||
    path.startsWith('/partners');

  if (useCustomNavbar) {
    return <OpenMPNavbar />;
  }

  return (
    <>
      <Navbar {...props} />
    </>
  );
}
