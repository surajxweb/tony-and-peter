import Link from "next/link";
import Image from "next/image";
import styles from "./AuthorCard.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";

export default function AuthorCard({
  name,
  bio,
  avatar,
  instagram,
  twitter,
  website,
}) {
  return (
    <div className={styles.cardContainer}>
      <h3>About the Author</h3>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image alt="author image" src={avatar} height={150} width={150} />
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.bio}>{bio}</div>
          <div className={styles.links}>
            {instagram && (
              <Link href={instagram} target="_blank" rel="noopener noreferrer">
                <AiFillInstagram
                  className={styles.icons}
                  color="#111"
                  size="1.5em"
                />
              </Link>
            )}
            {twitter && (
              <Link href={twitter} target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle
                  className={styles.icons}
                  color="#111"
                  size="1.5em"
                />
              </Link>
            )}
            {website && (
              <Link href={website} target="_blank" rel="noopener noreferrer">
                <TbWorldWww
                  className={styles.icons}
                  color="#111"
                  size="1.5em"
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
