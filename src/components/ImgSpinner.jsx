import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const ImgSpinner = ({ watches }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleNext = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % watches.length);
      setIsFading(false);
    }, 500);
  };

  const handlePrevious = () => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + watches.length) % watches.length
      );
      setIsFading(false);
    }, 500);
  };

  return (
    <div className="spinner-area">
      <div className="spinner-area-row-one">
        <button
          className="spinner-previous-btn spinner-btn"
          onClick={handlePrevious}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" />
        </button>
        <div className="spinner-img-wrapper">
          <Link to={"watches/" + watches[currentIndex].id}>
            <img
              src={watches[currentIndex].imgUrl}
              alt={watches[currentIndex].name}
              className={`spinner-current-img ${isFading ? "fading" : ""}`}
            />
          </Link>
        </div>
        <button className="spinner-btn spinner-next-btn" onClick={handleNext}>
          <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
        </button>
      </div>
      <p className="spinner-watch-name">{watches[currentIndex].name}</p>
    </div>
  );
};

export default ImgSpinner;
