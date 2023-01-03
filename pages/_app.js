import Script from "next/script";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-K73288L6RY"
    strategy="afterInteractive"
  >
    {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-K73288L6RY');
  `}
  </Script>;
  return <Component {...pageProps} />;
}

export default MyApp;
