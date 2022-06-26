import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "./Layout";
import NaveBar from "../components/NaveBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rasso Blog</title>
        <meta name="description" content="Blogger" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NaveBar />
      <main>
        <Layout />
      </main>
    </div>
  );
}
