import Footer from "./Footer";
import NavBar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

function LayoutComponent(props: LayoutProps) {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
}

export default LayoutComponent;
