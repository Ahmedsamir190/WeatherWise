import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

function LayoutComponent(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>Weather-Wise</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Weather-Wise website for weather info "
        />
        <meta name="keywords" content="Weather, Weather Wise, info" />
        <meta name="author" content="Ahmed Samir" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
}

export default LayoutComponent;
