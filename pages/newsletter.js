import letterCover from "../resources/newsletter.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import styles from "../styles/Newsletter.module.css";
import { NextSeo } from "next-seo";

export default function Newsletter() {
  return (
    <div>
      <NextSeo
        title={`Newsletter - Tony and Peter`}
        description={`The Newsletter Page of Tony and Peter, a pop culture madhouse, where one can subscribe to the best stories from the world of movies, tv, anime and gaming`}
      />
      <Navbar />
      <div className={styles.main}>
        <div className={styles.image}>
          <Image
            src={letterCover}
            width={880}
            height={300}
            alt="Small Logo"
            quality={30}
          />
        </div>
        <div className={styles.text}>
          Your ultimate source for the coolest movie, TV, anime, and gaming
          updates, handpicked and delivered to your inbox every day. Stay in the
          loop with the content that matters most!
        </div>
        <div className={styles.form}>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
