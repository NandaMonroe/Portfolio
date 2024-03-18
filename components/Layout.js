import Head from "next/head";

// fonts
import { Sora } from "next/font/google";

//font settings
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weigth: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

//components
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>NandaMonroe</title>
        <meta name="description" content="nanda's portfolio" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main>
        <div
          className={"page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative"}>
          <TopLeftImg />
          <Nav />
          <Header />
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
