import Link from "next/link";
import styles from "./RecentPosts.module.css";
import { FcCalendar } from "react-icons/fc";

export default function RecentPosts({ posts }) {
  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>Related Posts</h4>
      <ol className={styles.lists}>
        {posts.map((post) => {
          const publishedDate = new Date(post.publishedAt);
          const formattedDate = publishedDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });

          return (
            <Link key={post.id} href={`/posts/${post.slug}`}>
              <li className={styles.list}>
                <div className={styles.title}>{post.title}</div>
                <div className={styles.date}>{`🗓️ ${formattedDate}`}</div>
              </li>
            </Link>
          );
        })}
      </ol>
    </div>
  );
}
