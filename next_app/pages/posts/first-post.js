import Head from "next/head";
import Image from "next/image";
import Pic from "../../public/images/img.jpeg";
import Navbar from "./Navbar";
export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Next js First post</title>
      </Head>

      <h1>Hello</h1>
      {/* <img src="/images/img.jpeg" alt="" srcset="" /> */}
      {/* <Image src={Pic}></Image> */}
      {/* remote images */}
      <Image src="/images/img.jpeg" width={300} height={300}></Image>
    </>
  );
}
