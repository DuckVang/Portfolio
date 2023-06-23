import styles from "../page.module.scss";
import helpers from "../../styles/helpers.module.scss";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.light}></div>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.upper}>
            <h3>Hi all. I am</h3>
            <h1>Nguyen Duc&nbsp;Minh</h1>
            <h2>Full-stack developer</h2>
          </div>

          <div className={styles.lower}>
            <p className={helpers.comment}>click to change the shape</p>
            <p className={helpers.comment}>
              check out the portfolio on my GitHub page
            </p>
            <p className={styles.github_link}>
              <span className={helpers.variable}> const </span>
              <span className={helpers.variable_name}> githubLink</span>
              <span> = </span>
              <span className={helpers.string}>
                <Link href="https://github.com/DuckVang?tab=repositories">
                  https://github.com/DuckVang?tab=repositories
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className={styles.right}>
          {/* <CanvasAnimation></CanvasAnimation> */}
        </div>
      </div>
    </main>
  );
}
