import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Google Analytics Debug Mode (uncomment this line)
    // window['ga-disable-G-VN2VJLW8C3'] = true;

    const handleRouteChange = (url) => {
      // Trigger a virtual pageview event on route change
      gtag("config", "G-VN2VJLW8C3", { page_path: url });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="lazyOnload"
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
