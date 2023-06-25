import styles from "./style.module.scss";

const tabs = [
  {
    label: "😃",
  },
  {
    label: "😃",
  },
  {
    label: "😃",
  },
];

const ActivityBar = () => {
  return (
    <ul className={styles.activity_bar}>
      {tabs.map((tab, index) => {
        return <li key={index}>{tab.label}</li>;
      })}
    </ul>
  );
};
export default ActivityBar;
