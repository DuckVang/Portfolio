import styles from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
interface IWorkspace {
  name: string;
  folders?: {
    icon: IconDefinition;
    files: string;
  }[];
}

const workspace: IWorkspace[] = [
  { name: "personal life", folders: [{ icon: faChevronDown, files: "alfa" }] },
  { name: "contact" },
];

const PrimarySideBar = () => {
  return (
    <ul className={styles.primary_side_bar}>
      <li>
        <h2>
          <FontAwesomeIcon icon={faChevronDown} />
          1.workspace
        </h2>
        <ul>
          <li>alfa</li>
          <li>beta</li>
          <li>gamma</li>
        </ul>
      </li>
      <li>
        <h2>
          <FontAwesomeIcon icon={faChevronDown} />
          2.workspace
        </h2>
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
