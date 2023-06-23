"use client";

import { useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import classnames from "classnames";
import { LayoutGroup, motion } from "framer-motion";
const Navigation = () => {
  const links = [
    { label: "hello", route: "" },
    { label: "about", route: "" },
    { label: "projects", route: "" },
    { label: "more", route: "" },
    { label: "contacts", route: "" },
  ];

  const [isDropped, setIsDropped] = useState(false);
  const [selectedLink, setSelectedLink] = useState(links[0].label);
  function handleDropDown() {
    setIsDropped(!isDropped);
  }
  function moveUnderline() {
    console.log("move");
  }

  const MotionLink = ({ children, link, ...props }: any) => {
    return (
      <li onMouseEnter={() => setSelectedLink(link.label)}>
        <Link {...props} className={styles.link}>
          {children}
        </Link>

        {selectedLink === link.label && (
          <motion.div
            transition={{ duration: 0.3, type: "spring" }}
            layoutId="underline"
            className={styles.underline}
          />
        )}
      </li>
    );
  };

  return (
    <nav className={classnames(styles.navigation, { dropped: isDropped })}>
      <div className={styles.nickname}>
        <p>DuckVang</p>
        <div className={styles.dropdown} onClick={handleDropDown}>
          drop
        </div>
      </div>

      <LayoutGroup id="links-group">
        <ul className={styles.links}>
          {links.map((link, index) => {
            return (
              <MotionLink key={index} href={`/${link.route}`} link={link}>
                {link.label}
              </MotionLink>
            );
          })}
        </ul>
      </LayoutGroup>

      <div className={styles.contact}>
        Contact me:&nbsp;
        <Link className={styles.mail} href="nducminh002@gmail.com">
          nducminh002@gmail.com
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
