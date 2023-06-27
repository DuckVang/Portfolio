import { ReactNode } from "react";
import styles from "./style.module.scss";

const Text = ({ text }: { text: string }) => {
  const te = text.split("\n");

  return (
    <>
      {text.split("\n").map((line: string, index: number) => (
        <span key={index} className={styles.line}>
          <p>{line}</p>
        </span>
      ))}
    </>
  );
};
export default Text;
