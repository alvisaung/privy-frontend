import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";

import Button from "@mui/material/Button";

import NavBar from "@/components/NavBar";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Privy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}></main>
    </>
  );
}
