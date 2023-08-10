import Image from "next/image";
import biglogo from "../resources/5.jpg";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.image}>
          <Image src={biglogo} width={300} alt="Big Logo" />
        </div>
        <div className={styles.about}>
          <div className={styles.text}>
            hey there, we hope you have a fun time in our pop culture madhouse.
            come and say hello to us on social media.
          </div>
          <div className={styles.socials}>
            {/* Use the Link component with legacyBehavior */}
            <Link legacyBehavior href="https://instagram.com/tonyandpeter">
              <a target="_blank" className={styles.socialIcon}>
                <BsInstagram color="white" size="1.9em" />
              </a>
            </Link>
            <Link legacyBehavior href="https://twitter.com/tonyandpeter">
              <a target="_blank" className={styles.socialIcon}>
                <BsTwitter color="white" size="2em" />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.newsletter}>
          <Link href={"/newsletter"}>
            <button>Subscribe to our Newsletter</button>
          </Link>
        </div>
      </div>
      <div className={styles.credits}>
        <div>Copyright © 2023 Asad Khan / Suraj Katyayan</div>
      </div>
    </div>
  );
};

export default Footer;
