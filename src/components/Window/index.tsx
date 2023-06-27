import styles from "./style.module.scss";
import Text from "../Text";
const ContentWindow = () => {
  const example = `Aute qui labore proident officia mollit. Tempor incididunt duis magna
incididunt proident minim ipsum cillum. Reprehenderit ad duis nulla
minim officia anim ad labore ut elit incididunt dolore. Aliquip
officia incididunt reprehenderit non voluptate sit. Nisi aliqua
reprehenderit occaecat consectetur nulla laboris consequat commodo in
excepteur duis ullamco. Elit labore sunt minim veniam. Et aliqua elit
occaecat laborum aliquip magna amet incididunt laborum.`;



  return (
    <div className={styles.window}>
      <nav>
        <ul>
          <li>File</li>
          <li>Edit</li>
          <li>Selection</li>
        </ul>
      </nav>
      <main>
        <Text text={example} />
      </main>
    </div>
  );
};

export default ContentWindow;
