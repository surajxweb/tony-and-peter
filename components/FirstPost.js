import Image from "next/image";
import styles from "./FirstPost.module.css";
import Link from "next/link";

const imageStyle = {
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  borderRadius: "10px",
};

export default function FirstPost({ category, title, url, description, slug }) {
  return (
    <div className={styles.firstpost}>
      <div className={styles.info}>
        <p className={styles.category}>{category}</p>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
        <Link href={`/posts/${slug}`}>
          <button className={styles.button}>Read more</button>
        </Link>
      </div>
      <div className={styles.image}>
        <Link href={`/posts/${slug}`}>
          <Image
            src={url}
            width={700}
            height={400}
            alt="Lastest picture of post"
            style={imageStyle}
          />
        </Link>
      </div>
    </div>
  );
}
