import { request, gql } from "graphql-request";
import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/TagPages.module.css";
import { NextSeo } from "next-seo";

export default function Home({ posts }) {
  return (
    <div>
      <NextSeo
        title={`Hollywood - Tony and Peter`}
        description={`The Hollywood Page of Tony and Peter, a pop culture madhouse, containg the best stories from the world of hollywood movies.`}
      />
      <Navbar />
      <h2 className={styles.heading}>Hollywood</h2>
      <div className={styles.list}>
        {posts.map((post) => (
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
    query Marvel {
      posts(where: { category: "Hollywood" }) {
        id
        title
        slug
        coverPhoto {
          url
        }
        author {
          name
          avatar {
            url
          }
        }
        createdAt
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
