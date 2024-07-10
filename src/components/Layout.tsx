import Footer from "./Footer";
import NavBar from "./Navbar";

function LayoutComponent(props) {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
}

export default LayoutComponent;
