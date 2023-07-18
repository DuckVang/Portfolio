import styles from "./style.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  faChevronDown,
  faFolderClosed,
  faChevronRight,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
interface IWorkspace {
  name: string;
  href: string;
  folders?: {
    icon: IconDefinition;
    name: string;
    color?: string;
    href: string;
  }[];
}

const workspaces: IWorkspace[] = [
  {
    name: "about",
    href: "/workspace",
    folders: [
      {
        icon: faFolderClosed,
        name: "bio.txt",
        color: "purple",
        href: "/workspace/",
      },
      {
        icon: faFolderClosed,
        name: "experience.vsg",
        color: "grey",
        href: "/workspace/experience",
      },
      {
        icon: faFolderClosed,
        name: "education.png",
        color: "orange",
        href: "/workspace/",
      },
    ],
  },
  { name: "projects", href:"/workspace" },
  { name: "more", href:"/workspace" },
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
                    <Link href={folder.href}>{folder.name}</Link>
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
