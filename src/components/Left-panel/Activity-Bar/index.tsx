import styles from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

const tabs: { label: IconDefinition }[] = [
  {
    label: faMagnifyingGlass,
  },
  {
    label: faCircleStop,
  },
];

const ActivityBar = () => {
  return (
    <ul className={styles.activity_bar}>
      {tabs.map((tab: { label: IconDefinition }, index) => {
        return (
          <li key={index}>
            <FontAwesomeIcon icon={tab.label} />
          </li>
        );
      })}
    </ul>
  );
};
export default ActivityBar;
