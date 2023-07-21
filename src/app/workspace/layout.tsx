"use client";

import LeftPanel from "@/components/Left-panel";
import Text from "@/components/Text";
import styles from "./layout.module.scss";
import Link from "next/link";
import PageWrapper from "@/components/Wrapper/Page-Wrapper";
import WindowNavigation from "@/components/Window-navigation ";
import { createContext } from "react";
export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <PageWrapper className={styles.main}>
      <LeftPanel />
      <div className={styles.window}>
        <WindowNavigation />
        {children}
      </div>
    </PageWrapper>
  );
}
