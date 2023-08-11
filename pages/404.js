import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import error_image from "../resources/404.svg";
import Link from "next/link";
import styles from "../styles/Error.module.css";
import { NextSeo } from "next-seo";

export default function ErrorPage() {
  return (
    <div>
      <NextSeo
        title="ERROR 404 - Tony and Peter: Your Pop Culture Madhouse"
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
      <div className={styles["image-container"]}>
        <Image
          src={error_image}
          width={800}
          height={500}
          alt="Picture of the author"
        />
      </div>
      <p className={styles["error-message"]}>
        You are in the dark alleys of nowhere land. Crazy things happen here.
        Let us get you <Link href={"/"}>home</Link> safely.
      </p>
      <Footer />
    </div>
  );
}
