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
        title={`${post.title} - a story by Tony and Peter: Your Pop Culture Madhouse`}
        description={`{${post.description} - A Tony and Peter Story}`}
        canonical="https://www.tonyandpeter.com/"
        openGraph={{
          url: "https://www.tonyandpeter.com/",
          title: "Tony and Peter: Your Pop Culture Madhouse",
          description:
            "Welcome to Tony and Peter: Your Pop Culture Madhouse, your ultimate destination for everything pop culture!",
          images: [
            {
              url: `${post.coverPhoto.url}`,
              width: 1280,
              height: 720,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/EvSyNaKbTNizqp2ftDJO",
              width: 1200,
              height: 627,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            {
              url: "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/LCwmKf9SZGhl6XGIqVzw",
            },
            {
              url: "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/AUK8STQwQOOHNFCT85en",
            },
          ],
          siteName: "Tony and Peter: Your Pop Culture Madhouse",
        }}
        // twitter={{
        //   handle: "@handle",
        //   site: "@site",
        //   cardType: "summary_large_image",
        // }}
        additionalMetaTags={[
          {
            property: "og:url",
            content: "https://www.tonyandpeter.com/",
          },
          {
            name: "og:type",
            content: "News Portal",
          },
          {
            httpEquiv: "og:title",
            content: "Tony and Peter: Your Pop Culture Madhouse",
          },
          {
            httpEquiv: "og:description",
            content:
              "Welcome to Tony and Peter: Your Pop Culture Madhouse, your ultimate destination for everything pop culture! Immerse yourself in a vibrant world where we explore the realms of movies, TV shows, comics, music, and more. Dive into captivating discussions, insightful reviews, and entertaining analyses of the latest trends and timeless classics. Join us on this exhilarating journey through the pop culture universe, where every click opens the door to a madhouse of excitement, nostalgia, and endless entertainment. Get ready to be swept away by the dynamic duo's passion for all things pop culture. Your adventure starts here!",
          },
          {
            httpEquiv: "og:image",
            content:
              "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/6kolkAHHQp2I3c31Zxcc",
          },
          {
            httpEquiv: "og:image:width",
            content: "600",
          },
          {
            httpEquiv: "og:image:height",
            content: "600",
          },
        ]}
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
        {relatedPosts.length > 0 && <RecentPosts posts={relatedPosts} />}
        {/* ADVERTISEMENT */}
      </div>

      <Footer />
    </div>
  );
};

export default BlogPost;
