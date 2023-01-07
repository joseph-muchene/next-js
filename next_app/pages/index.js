import Head from "next/head";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Layout from "./Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <Link href="/posts/first-post">Hello world</Link>
    </Layout>
  );
}
