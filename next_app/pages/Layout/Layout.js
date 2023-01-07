import Head from "next/head";
import { navLinks } from "../lib/navLinks";
export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      {children}
    </div>
  );
}
