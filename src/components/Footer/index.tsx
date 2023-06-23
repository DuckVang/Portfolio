import LinkedIn from "../../../public/assets/icons/linkedin.svg";
import GitHub from "../../../public/assets/icons/github.svg";
import Link from "next/link";
import style from "./style.module.scss";
const Footer = ({ links }: any) => {
  return (
    <footer className={style.footer}>
      <div className={style.find_me}>
        <p>Find me in:</p>
      </div>

      <div className={style.links}>
        <Link href="/" className={style.linkedin}>
          <LinkedIn />
        </Link>
      </div>

      <Link href="/" className={style.github}>
        <span>@DuckVang</span>
        <GitHub />
      </Link>
    </footer>
  );
};
export default Footer;
