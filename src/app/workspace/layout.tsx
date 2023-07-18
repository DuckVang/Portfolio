"use client";

import LeftPanel from "@/components/Left-panel";
import Text from "@/components/Text";
import styles from "./layout.module.scss";
import Link from "next/link";
import PageWrapper from "@/components/Wrapper/Page-Wrapper";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <PageWrapper className={styles.main}>
      <LeftPanel />
      <div className={styles.window}>
        <nav>
          <ul>
            <li>
              <Link href="/about/projects">File</Link>
            </li>
            <li>Edit</li>
            <li>Selection</li>
          </ul>
        </nav>
        {children}
      </div>
    </PageWrapper>
  );
}
