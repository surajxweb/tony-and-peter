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
        title={`Page not found - Tony and Peter`}
        description={`Error 404 - page not found by Tony and Peter`}
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
