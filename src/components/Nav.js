import React from "react";

import styles from "./Nav.module.css";

import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <div className={styles.container}>
      <Link href="/">Home</Link>
      <Image src="/images/profile.jpg" height={48} width={48} alt="" priority />
      <Link href="/about">About</Link>
    </div>
  );
}
