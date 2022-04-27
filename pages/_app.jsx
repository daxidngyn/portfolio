import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative z-auto flex flex-col flex-1 min-h-screen justify-between bg-zinc-900 text-white">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <Navbar />

      <div className="pt-16 relative flex-grow overflow-hidden">
        <Component {...pageProps} />
      </div>

      <Footer />
    </div>
  );
}

export default MyApp;
