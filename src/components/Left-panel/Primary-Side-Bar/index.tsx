import styles from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faChevronDown,
  faFolderClosed,
  faChevronRight,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
interface IWorkspace {
  name: string;
  folders?: {
    icon: IconDefinition;
    name: string;
    color?: string;
  }[];
}

const workspaces: IWorkspace[] = [
  {
    name: "personal life",
    folders: [
      { icon: faFolderClosed, name: "bio", color: "purple" },
      { icon: faFolderClosed, name: "interests", color: "grey" },
      { icon: faFolderClosed, name: "education", color: "orange" },
    ],
  },
  { name: "contact" },
];

const PrimarySideBar = () => {
  return (
    <ul className={styles.primary_side_bar}>
      {workspaces.map((workspace: IWorkspace, index: number) => {
        return (
          <li key={index}>
            <h2>
              <FontAwesomeIcon icon={faCaretDown} />
              {workspace.name}
            </h2>
            <ul>
              {workspace.folders?.map((folder, index) => {
                return (
                  <li key={index} className={styles.folder}>
                    <FontAwesomeIcon icon={faChevronRight} />
                    <FontAwesomeIcon icon={folder.icon} color={folder.color} />
                    {folder.name}
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default PrimarySideBar;
