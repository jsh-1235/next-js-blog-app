import React from "react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import Meta from "@components/Meta";
import styles from "./Post.module.css";

import { getAllPostIds, getPostData } from "@lib/posts";

export default function Post({ post }) {
  const router = useRouter();

  const { id } = router.query;

  console.log(post);

  return (
    <>
      <Meta title={id} description={post.title} />
      <div className={styles.container}>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);

  return {
    props: {
      post,
    },
  };
}
