import letterCover from "../resources/newsletter.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import styles from "../styles/Newsletter.module.css";
import { NextSeo } from "next-seo";
import React, { useState } from "react";

export default function Newsletter() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [response, setResponse] = useState(0);

  const handleChange = (e) => {
    setResponse(0);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/mvojgwdn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successful form submission logic (e.g., show success message)
        setResponse(1);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        // Error handling (e.g., show error message)
        setResponse(2);
      }
    } catch (error) {
      setResponse(2);
    }
    // Clear form fields after submission (optional)
  };

  var resmessage;
  switch (response) {
    case 0:
      resmessage = "";
      break;
    case 1:
      resmessage = "Subscription successful! 🥳";
      break;
    case 2:
      resmessage =
        "Failed to Subscribe. Please refresh the page and try again! ☹️";
      break;
    default:
      resmessage = "Server Error. Please refresh the page and try again! 🔃";
  }

  return (
    <div>
      <NextSeo
        title="Newsletter - Tony and Peter: Your Pop Culture Madhouse"
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
      <div className={styles.main}>
        <div className={styles.image}>
          <Image
            src={letterCover}
            width={880}
            height={300}
            alt="Small Logo"
            quality={30}
            placeholder="blur"
          />
        </div>
        <div className={styles.text}>
          Your ultimate source for the coolest movie, TV, anime, and gaming
          updates, handpicked and delivered to your inbox every day. Stay in the
          loop with the content that matters most!
        </div>
        <div className={styles.form}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <button className={styles.ctabutton} type="submit">
              Submit
            </button>
            <div className={styles.responsemess}>
              {response > 0 && <div>{resmessage}</div>}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
