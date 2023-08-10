import Image from "next/image";
import styles from "./BlogCard.module.css";
import Link from "next/link";

export default function BlogCard({ imgurl, title, author, avatar, slug }) {
  const dateString = "2023-07-17T17:21:33.2257+00:00";
  const properDate = new Date(dateString);

  const month = properDate.toLocaleString("default", { month: "long" });
  const day = properDate.toLocaleString("default", { day: "numeric" });
  const year = properDate.toLocaleString("default", { year: "numeric" });

  const formattedDate = `${month} ${day}, ${year}`;

  return (
    <Link href={`/posts/${slug}`}>
      <div className={styles.blogcard}>
        <div className={styles.image}>
          <Image
            src={imgurl}
            width={444.44}
            height={250}
            alt="Picture of the cover"
          />
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.info}>
          <div className={styles.author}>
            <Image
              src={avatar}
              width={28}
              height={28}
              alt="Picture of the author"
            />
            <div className={styles.authorname}>{author}</div>
          </div>
          <div className={styles.date}>{formattedDate}</div>
        </div>
      </div>
    </Link>
  );
}
