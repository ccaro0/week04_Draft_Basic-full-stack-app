// import ... from '...' loads something from another file or package so this file can use it.
// This line brings in Next.js's Head component. Use it to put things in the document <head>
// (for example the browser tab title). 'next/head' is a Next.js package, not a local file.
import Head from 'next/head';
// Brings in Next.js's Link component. Unlike a normal <a href>, Link navigates between
// pages in this app without a full page reload (client-side navigation).
import Link from 'next/link';
// Loads two things from the local layout.js file (one folder up, then into components/):
// Layout is the default export — a wrapper that shares header/profile styling.
// siteTitle is a named export (a string constant). It is imported here but not used on
// this page; the tab title is written by hand in <Head> instead.
import Layout, { siteTitle } from '../components/layout';
// Loads a CSS Module from the shared utility stylesheet. utilStyles is an object of class
// names. utilStyles.headingMd is the hashed class for that style so it does not clash with
// other CSS. Used below as className={utilStyles.headingMd}.
import utilStyles from '../styles/utils.module.css';

// export default function ...() defines the React component for this page and makes it the
// default export. In the Pages Router, the default export of a file in pages/ is what
// Next.js renders for that URL. This file is pages/index.js, so Home maps to the "/" route.
export default function Home() {
  // return sends the UI (JSX) back so React can display it. Everything inside the
  // parentheses is markup. Layout gets home so the home layout variant is used; Head sets
  // the tab title; Link goes to /posts/first-post.
  return (
    <Layout home>
      <Head>
        <title> Next.js Blog by Caro</title>
      </Head>
      {/* className={utilStyles.headingMd} does not come from a global CSS file as a
          plain string. utilStyles is the object imported from ../styles/utils.module.css
          (a CSS Module). headingMd is the .headingMd class defined in that file (font-size
          1.2rem, etc.). Next.js turns it into a unique hashed class name at build time so
          it will not collide with other styles. The curly braces mean "use this JS value
          as the class name" instead of a hardcoded string like "headingMd". */}
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Caro and this is my first blog!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <p>
          {/* Link is the Next.js component imported above. href="/posts/first-post" 
          is the destination URL (the first-post.js page). "First Post" is the clickable text. 
          Clicking it navigates without a full page reload. */}
          <Link href="/posts/first-post">First Post</Link>
        </p>
      </section>

      
    </Layout>
  );
}
