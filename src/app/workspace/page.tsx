import styles from "./page.module.scss";
import helpers from "../../styles/helpers.module.scss";
import Link from "next/link";
import CanvasAnimation from "@/components/Three-Animation";
import LeftPanel from "@/components/Left-panel";

import Text from "@/components/Text";
import WindowWrapper from "@/components/Wrapper/Window-Wrapper";

export default function Bio() {
  const example = `Aute qui labore proident officia mollit. Tempor incididunt duis magna
    incididunt proident minim ipsum cillum. Reprehenderit ad duis nulla
    minim officia anim ad labore ut elit incididunt dolore. Aliquip
    officia incididunt reprehenderit non voluptate sit. Nisi aliqua
    reprehenderit occaecat consectetur nulla laboris consequat commodo in
    excepteur duis ullamco. Elit labore sunt minim veniam. Et aliqua elit
    occaecat laborum aliquip magna amet incididunt laborum.
    
    Cillum commodo reprehenderit aliqua laborum sunt in ut ea laboris ex. 
    Mollit pariatur non exercitation reprehenderit ea laboris occaecat excepteur enim qui ut dolor. 
    Culpa pariatur minim dolor nulla do velit mollit duis magna magna cillum et. 
    Minim pariatur irure do labore voluptate aute qui exercitation exercitation.
    Quis nisi aliqua ad occaecat.
    Incididunt cupidatat sint dolor veniam anim do velit est eu laboris sint.
    
    Culpa ea ipsum consequat irure duis anim aliqua elit amet et aliquip minim.
    Reprehenderit cillum occaecat irure reprehenderit minim.
    Est tempor nisi ullamco ad ut enim duis.
    Incididunt et enim nisi quis nisi fugiat labore deserunt anim consequat id sint nisi.`;

  return (
    <WindowWrapper className={styles.main}>
      <Text text={example} />
    </WindowWrapper>
  );
}
