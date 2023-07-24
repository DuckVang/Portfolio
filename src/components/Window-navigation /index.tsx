import Link from "next/link";
import styles from "./style.module.scss";
import { useContext } from "react";
import { HistoryContext } from "@/app/providers";

const WindowNavigation = (props: any) => {
  const { state, dispatch } = useContext(HistoryContext);
  return (
    <nav className={styles.navigation}>
      <ul>
        {/* <li>
          <Link href="/about/projects">File</Link>
        </li>
        <li>Edit</li>
        <li>Selection</li> */}

        {state.history.map((link, index) => {
          return (
            <li key={index}>
              {link.length > 0 ? (
                <Link href={"/workspace/" + link}>{link}</Link>
              ):<Link href={"/workspace/" + link}>{"about"}</Link>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default WindowNavigation;
