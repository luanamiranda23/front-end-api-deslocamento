import React from 'react';
import Link from 'next/link';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/clients">
              <a>Clients</a>
            </Link>
          </li>
          <li>
            <Link href="/drivers">
              <a>Drivers</a>
            </Link>
          </li>
          <li>
            <Link href="/trips">
              <a>Trips</a>
            </Link>
          </li>
          <li>
            <Link href="/vehicles">
              <a>Vehicles</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
