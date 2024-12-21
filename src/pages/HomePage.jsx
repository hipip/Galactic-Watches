import Navbar from "../components/Navbar";
import ImgSpinner from "../components/ImgSpinner";

const HomePage = ({ watches }) => {
  return (
    <div id="home-page">
      <Navbar />
      <div className="hero-area">
        <div className="text-area">
          <h1 id="logo">GALACTIC WATCHES</h1>
          <h2 id="slogan">
            Where time meets precision and luxury beyond the stars
          </h2>
        </div>
        <ImgSpinner watches={watches} />
      </div>
    </div>
  );
};

export default HomePage;