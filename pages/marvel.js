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
        title="Marvel - Tony and Peter: Your Pop Culture Madhouse"
        description="Welcome to Tony and Peter: Your Pop Culture Madhouse, your ultimate destination for everything pop culture! Immerse yourself in a vibrant world where we explore the realms of movies, TV shows, comics, music, and more. Dive into captivating discussions, insightful reviews, and entertaining analyses of the latest trends and timeless classics. Join us on this exhilarating journey through the pop culture universe, where every click opens the door to a madhouse of excitement, nostalgia, and endless entertainment. Get ready to be swept away by the dynamic duo's passion for all things pop culture. Your adventure starts here!"
        canonical="https://www.tonyandpeter.com/"
        openGraph={{
          url: "https://www.tonyandpeter.com/",
          title: "Tony and Peter: Your Pop Culture Madhouse",
          description:
            "Welcome to Tony and Peter: Your Pop Culture Madhouse, your ultimate destination for everything pop culture!",
          images: [
            {
              url: "https://media.graphassets.com/output=format:jpg/resize=height:800,fit:max/6kolkAHHQp2I3c31Zxcc",
              width: 600,
              height: 600,
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
      <h2 className={styles.heading}>Marvel</h2>
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
      posts(where: { category: "Marvel" }) {
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
