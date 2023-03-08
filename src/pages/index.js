import Head from "next/head";
import { getSortedData } from "@lib/posts";

import List from "@components/List";

import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  console.log(posts);

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        {posts?.map((post) => {
          return <List key={post.id} post={post} />;
        })}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = getSortedData();

  return {
    props: {
      posts,
    },
  };
}
