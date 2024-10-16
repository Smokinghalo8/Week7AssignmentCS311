// pages/index.tsx or app/page.tsx
//meaning this is the landing page of the site, or well should be used as such
//DOESNT EVEN WORK THE LINKS ARE BUSTED????

import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Our Restaurant</h1>
      <nav>
        <ul>
          <li><Link href="/appetizers">Appetizers</Link></li>
          <li><Link href="/entrees">Entrees</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
