import styles from "./page.module.scss";
import helpers from "../../styles/helpers.module.scss";
import Link from "next/link";
import CanvasAnimation from "@/components/Three-Animation";
import LeftPanel from "@/components/Left-panel";
import ContentWindow from "@/components/Window";
export default function Home() {
  return (
    <main className={styles.main}>
      <LeftPanel />
      <ContentWindow />
    </main>
  );
}
