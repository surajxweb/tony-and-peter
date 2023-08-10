import { request } from "graphql-request"; // Import graphql-request
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AuthorCard from "../../components/AuthorCard";
import RecentPosts from "../../components/RecentPosts";
import Image from "next/image";
import { NextSeo } from "next-seo";
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
  const { posts } = await request(process.env.GRAPHQL_ENDPOINT, query);

  // Generate an array of paths with the slug parameter
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch the blog post based on the slug parameter
  const query1 = `
    query GetPostBySlug($slug: String!) {
      posts(where: { slug: $slug }) {
        id
        title
        description
        category
        publishedAt
        content {
          html
        }
        author {
          name
          authorBio
          instagram
          twitter
          website
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
    query1,
    variables
  );

  // Fetch related posts with the same category
  const query2 = `
  query GetRelatedPosts($category: String!, $postId: ID!) {
    posts(
      where: { category: $category, id_not: $postId }
      orderBy: publishedAt_DESC
      first: 10
    ) {
      id
      title
      slug
      publishedAt
    }
  }
`;
  const relatedPostsVariables = {
    category: posts[0].category,
    postId: posts[0].id,
  };

  const { posts: relatedPosts } = await request(
    process.env.GRAPHQL_ENDPOINT,
    query2,
    relatedPostsVariables
  );

  // Return the blog post data and related posts as props
  return {
    props: {
      post: posts[0],
      relatedPosts,
    },
  };
}

const BlogPost = ({ post, relatedPosts }) => {
  return (
    <div>
      <NextSeo
        title={`${post.title} - Tony and Peter`}
        description={`${post.description} - A news post by Tony and Peter`}
      />
      <Navbar />
      <div className={styles.pageContent}>
        <div className={styles["blog-container"]}>
          <h1 className={styles["blog-title"]}>{post.title}</h1>
          <div className={styles["image-container"]}>
            <Image
              src={post.coverPhoto.url}
              width={640}
              height={360}
              alt="Small Logo"
            />
          </div>
          {/* Render the blog post content as HTML */}
          <div
            className={styles["blog-content"]}
            dangerouslySetInnerHTML={{ __html: post.content.html }}
          />
          <AuthorCard
            name={post.author.name}
            avatar={post.author.avatar.url}
            bio={post.author.authorBio}
            instagram={post.author.instagram}
            twitter={post.author.twitter}
            website={post.author.website}
          />
        </div>
        <RecentPosts posts={relatedPosts} />
        {/* ADVERTISEMENT */}
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
