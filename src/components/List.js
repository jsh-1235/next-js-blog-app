import React from "react";
import Link from "next/link";
import styles from "./List.module.css";

export default function List({ post }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </div>
        <div className={styles.date}>{post.date}</div>
      </div>
    </>
  );
}
