'use client';

import React, { ReactNode } from 'react';
import Link from 'next/link';


//import Link from 'next/link'; // Use this for Next.js

interface LayoutProps {
  children: ReactNode; // Ensure that everything is a child
}

const Layout: React.FC<LayoutProps> = ({ children }) => { //layout

//why isnt the links for appetizers nor entrees not working????????????????????????????????????????????????????????????? annoyance
//bruh
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Ethans Big ol Restaurant of dreams</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              
              <Link href="/appitizers"><li>Appetizers</li></Link>
              <li><a href="/entries">Entrees</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>©EthansMagicalFood Copyright 20203</p>
        </footer>
      </body>
    </html>
  );
};


//This is where the other files take in the function layout
export default Layout;

