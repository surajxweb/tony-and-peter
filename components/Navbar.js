// import Image from "next/image";
// import logo from "../resources/DS.jpg";
// import styles from "./Navbar.module.css";
// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <div className={styles.nav}>
//       <Link href="/">
//         <div className={styles.image}>
//           <Image src={logo} width={70} alt="Small Logo" />
//           <h1>Tony and Peter</h1>

//           {/* <h1>Tony and Peter</h1> */}
//         </div>
//       </Link>
//       <ul className={styles.lists}>
//         <Link href="/marvel">
//           <li className={styles.list}>Marvel</li>
//         </Link>
//         <Link href="/dc">
//           <li className={styles.list}>DC Studios</li>
//         </Link>
//         <Link href="/anime">
//           <li className={styles.list}>Anime</li>
//         </Link>
//         <Link href="/hollywood">
//           <li className={styles.list}>Hollywood</li>
//         </Link>
//         <Link href="/indian">
//           <li className={styles.list}>Indian</li>
//         </Link>
//         <Link href="/tv">
//           <li className={styles.list}>TV Shows</li>
//         </Link>
//         <Link href="/gaming">
//           <li className={styles.list}>Gaming</li>
//         </Link>
//         <Link href="/newsletter">
//           <li className={`${styles.list} ${styles.news}`}>🔔 Newsletter</li>
//         </Link>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../resources/DS.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import { useState } from "react";
import { BiSolidBellRing } from "react-icons/bi";

export default function Navbar() {
  const [listVisibility, setListVisibility] = useState(false);
  const listVisibilityHandeller = () => {
    setListVisibility(!listVisibility);
  };
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navIcons} onClick={listVisibilityHandeller}>
          {!listVisibility && <GiHamburgerMenu size="1.5em" color="#ffff" />}
          {listVisibility && <GiCancel size="1.5em" color="#ffff" />}
        </div>
        <Link href="/">
          <div className={styles.logo}>
            <Image alt="logo" height={60} width={60} src={logo} />
            <h1>Tony and Peter</h1>
          </div>
        </Link>
        <ul className={styles.links}>
          <Link href="/marvel">
            <li className={styles.list}>Marvel</li>
          </Link>
          <Link href="/dc">
            <li className={styles.list}>DC Studios</li>
          </Link>
          <Link href="/hollywood">
            <li className={styles.list}>Hollywood</li>
          </Link>
          <Link href="/tv">
            <li className={styles.list}>TV Shows</li>
          </Link>
          <Link href="/anime">
            <li className={styles.list}>Anime</li>
          </Link>
          <Link href="/indian">
            <li className={styles.list}>Indian</li>
          </Link>
          <Link href="/gaming">
            <li className={styles.list}>Gaming</li>
          </Link>
          <Link href="/newsletter">
            <li className={styles.list}>Newsletter</li>
          </Link>
        </ul>

        <div className={styles.navIcons}>
          <Link href={"/newsletter"}>
            <BiSolidBellRing size="1.5em" color="#ffff" />
          </Link>
        </div>
      </div>
      {listVisibility && (
        <ul className={styles.mobilelinks} onClick={listVisibilityHandeller}>
          <Link href={"/marvel"} className={styles.mobilelink}>
            Marvel
          </Link>
          <Link href={"/dc"} className={styles.mobilelink}>
            DC Studios
          </Link>
          <Link href={"/hollywood"} className={styles.mobilelink}>
            Hollywood
          </Link>
          <Link href={"/tv"} className={styles.mobilelink}>
            TV
          </Link>
          <Link href={"/anime"} className={styles.mobilelink}>
            Anime
          </Link>
          <Link href={"/indian"} className={styles.mobilelink}>
            Indian
          </Link>
          <Link href={"/gaming"} className={styles.mobilelink}>
            Gaming
          </Link>
        </ul>
      )}
    </>
  );
}
