import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnLoad"
        src="https://www.googletagmanager.com/gtag/js?id=G-VN2VJLW8C3"
      />

      <Script id="ga4-setup" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VN2VJLW8C3');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
