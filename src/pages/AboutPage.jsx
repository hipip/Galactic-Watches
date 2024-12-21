import CartButton from "../components/CartButton";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <>
      <div id="about-page" className="page">
        <Navbar />
        <h1 className="page-title">About Us</h1>
        <div className="bio-area">
          <p className="logo">GW</p>
          <p className="bio">
            At Galactic Watches, we craft high-quality, premium timepieces that
            blend precision, elegance, and timeless design. Each watch is a
            statement of sophistication, perfect for those who value style and
            reliability. Explore a galaxy of possibilities with us.
          </p>
        </div>
      </div>
      <CartButton />
    </>
  );
};

export default AboutPage;
