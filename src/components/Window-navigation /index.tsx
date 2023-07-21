import Link from "next/link";
import styles from "./style.module.scss"
const WindowNavigation = (props: any) => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link href="/about/projects">File</Link>
        </li>
        <li>Edit</li>
        <li>Selection</li>
      </ul>
    </nav>
  );
};

export default WindowNavigation;
