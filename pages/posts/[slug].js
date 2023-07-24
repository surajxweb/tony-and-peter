import { request } from "graphql-request"; // Import graphql-request
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { NextSeo } from "next-seo";

// ... (other imports)

import styles from "../../styles/Post.module.css";

export async function getStaticPaths() {
  // Fetch all blog posts from the GraphQL API
  const query = `
    query AllPosts {
      posts {
        slug
      }
    }
  `;
  const { posts } = await request(process.env.GRAPHQL_ENDPOINT, query); // Replace API_ENDPOINT with your GraphQL API endpoint

  // Generate an array of paths with the slug parameter
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch the blog post based on the slug parameter
  const query = `
    query GetPostBySlug($slug: String!) {
      posts(where: { slug: $slug }) {
        id
        title
        description
        category
        content {
          html
        }
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
  const variables = { slug: params.slug };
  const { posts } = await request(
    process.env.GRAPHQL_ENDPOINT,
    query,
    variables
  ); // Replace API_ENDPOINT with your GraphQL API endpoint

  // Return the blog post data as props
  return {
    props: {
      post: posts[0], // The GraphQL response returns an array, but we only expect one post with this slug
    },
  };
}

const BlogPost = ({ post }) => {
  return (
    <div>
      <NextSeo
        title={`${post.title} - Tony and Peter`}
        description={`${post.description} - A news post by Tony and Peter`}
      />
      <Navbar />
      <div className={styles["blog-container"]}>
        <h1 className={styles["blog-title"]}>{post.title}</h1>
        <Image
          src={post.coverPhoto.url}
          width={500}
          height={200}
          alt="Small Logo"
        />
        {/* Render the blog post content as HTML */}
        <div
          className={styles["blog-content"]}
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
        {/* Add other components to display the author, cover photo, etc. */}
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
