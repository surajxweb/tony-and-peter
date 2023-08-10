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
