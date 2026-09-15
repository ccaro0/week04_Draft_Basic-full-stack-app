// import ... from '...' loads something from another file or package so this file can use it.
// This line brings in Next.js's Head component. Use it to put things in the document <head>
// (for example the browser tab title). 'next/head' is a Next.js package, not a local file.
import Head from 'next/head';
// Brings in Next.js's Link component. Unlike a normal <a href>, Link navigates between
// pages in this app without a full page reload (client-side navigation).
import Link from 'next/link';
// Loads only the default Layout export from the shared layout component. '../../' goes up
// from pages/posts/ to the project root, then into components/. Layout is imported here
// but this page does not wrap its JSX in <Layout>, so this import currently does nothing visible.
import Layout from '../../components/layout';

// export default function ...() defines the React component for this page and makes it the
// default export. In the Pages Router, the default export of a file in pages/ is what
// Next.js renders for that URL. This file is pages/posts/first-post.js, so FirstPost maps
// to the "/posts/first-post" route.
export default function FirstPost() {
    // return sends the UI (JSX) back so React can display it. Everything inside the
    // parentheses is markup. <>...</> is a fragment (groups elements without an extra DOM
    // node). Head sets the tab title to "First Post". Link navigates back to "/".
    return (
      <>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </>
    );
  }
