import { request, gql } from "graphql-request";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import BlogCard from "../components/BlogCard";
import FirstPost from "../components/FirstPost";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home({ posts }) {
  return (
    <div className={styles.main}>
      <NextSeo
        title={`Home - Tony and Peter`}
        description={`The Homepage of Tony and Peter, a pop culture madhouse, containg the best stories from the world of movies, tv, anime and gaming`}
      />
      <Navbar />
      <FirstPost
        title={posts[0].title}
        category={posts[0].category}
        description={posts[0].description}
        url={posts[0].coverPhoto.url}
        slug={posts[0].slug}
      />

      <h2 className={styles.heading}>Latest articles</h2>
      <div className={styles.list}>
        {posts.slice(1).map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            imgurl={post.coverPhoto.url}
            date={post.createdAt}
            author={post.author.name}
            avatar={post.author.avatar.url}
            slug={post.slug}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const endpoint = process.env.GRAPHQL_ENDPOINT; // Replace this with your actual GraphQL API endpoint
  const query = gql`
    query AllPosts {
      posts(orderBy: createdAt_DESC) {
        id
        slug
        title
        description
        category
        author {
          name
          avatar {
            url
          }
        }
        createdAt
        coverPhoto {
          url
        }
      }
    }
  `;

  const data = await request(endpoint, query);

  return {
    props: {
      posts: data.posts,
    },
  };
}
