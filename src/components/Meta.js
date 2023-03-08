import React from "react";
import Head from "next/head";

export default function Meta({ title, description }) {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
    </>
  );
}
