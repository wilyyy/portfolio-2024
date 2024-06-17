import Head from "next/head";
import Image from "next/image";

import Layout from "@/components/Layout/Layout";

export default function Home() {
   return (
      <Layout>
         <p>Rebuilding portfolio.</p>
         <a target="_blank" href="https://willy-portfolio.vercel.app/">
            Click here for Legacy Portfolio from 2022.
         </a>
      </Layout>
   );
}
