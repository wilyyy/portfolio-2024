import styles from "./layout.module.scss";
import Head from "next/head";

import ObfuscatedText from "@/components/ObfuscatedText/ObfuscatedText";

export default function Layout() {
   return (
      <section className={styles.container}>
         <ObfuscatedText>Portfolio in progress.</ObfuscatedText>
         <a>Click here for 2022 Portfolio</a>
      </section>
   );
}
