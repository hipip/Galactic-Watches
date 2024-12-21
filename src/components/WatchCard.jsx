import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WatchCard = ({ watch, delay }) => {
  const { id, name, imgUrl, description, rating, price } = watch;

  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    setIsCardVisible(true);
  }, []);

  return (
    <Link
      className={`watch-card ${isCardVisible ? "animate-card" : ""}`}
      to={`/watches/${id}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="watch-image-wrapper">
        <img src={imgUrl} alt={name} />
      </div>
      <div className="watch-details-container">
        <p className="watch-name">{name}</p>
        <div className="watch-rating-price-container">
          <p className="watch-rating">
            {rating}
            <FontAwesomeIcon icon={faStar} />
          </p>
          <p className="watch-price">{price}$</p>
        </div>
      </div>
    </Link>
  );
};

export default WatchCard;
