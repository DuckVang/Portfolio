import PrimarySideBar from "./Primary-Side-Bar";
import ActivityBar from "./Activity-Bar";
import styles from "./style.module.scss";
const LeftPanel = () => {
  return (
    <div className={styles.left_panel}>
      <ActivityBar />
      <PrimarySideBar />
    </div>
  );
};

export default LeftPanel;
