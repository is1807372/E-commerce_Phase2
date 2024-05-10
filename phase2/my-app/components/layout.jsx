import Head from 'next/head';

const layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>E-Commerce Platform</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        {/* Add header content */}
      </header>

      <main>{children}</main>

      <footer>
        {/* Add footer content */}
      </footer>
    </div>
  );
};

export default layout;
