import Image from "next/image";
import logo from "../resources/DS.jpg";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <Link href="/">
        <div className={styles.image}>
          <Image src={logo} width={70} alt="Small Logo" />
          <h1>Tony and Peter</h1>

          {/* <h1>Tony and Peter</h1> */}
        </div>
      </Link>
      <ul className={styles.lists}>
        <Link href="/marvel">
          <li className={styles.list}>Marvel</li>
        </Link>
        <Link href="/dc">
          <li className={styles.list}>DC Studios</li>
        </Link>
        <Link href="/anime">
          <li className={styles.list}>Anime</li>
        </Link>
        <Link href="/hollywood">
          <li className={styles.list}>Hollywood</li>
        </Link>
        <Link href="/indian">
          <li className={styles.list}>Indian</li>
        </Link>
        <Link href="/tv">
          <li className={styles.list}>TV Shows</li>
        </Link>
        <Link href="/gaming">
          <li className={styles.list}>Gaming</li>
        </Link>
        <Link href="/newsletter">
          <li className={`${styles.list} ${styles.news}`}>🔔 Newsletter</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
