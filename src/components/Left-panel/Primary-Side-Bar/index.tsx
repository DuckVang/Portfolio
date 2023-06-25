import styles from "./style.module.scss";

const PrimarySideBar = () => {
  return (
    <ul className={styles.primary_side_bar}>
      <li>
        <h2>1.workspace</h2>
        <ul>
            <li>alfa</li>
            <li>beta</li>
            <li>gamma</li>

        </ul>
      </li>
      <li>
        <h2>2.workspace</h2>
        <ul>
            <li>ichi</li>
            <li>ni</li>
            <li>san</li>
        </ul>
      </li>
    </ul>
  );
};

export default PrimarySideBar;
