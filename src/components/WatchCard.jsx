import { faAdd, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WatchCard = ({ watch, delay, addToCart }) => {
  const { id, name, imgUrl, description, rating, price } = watch;

  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    setIsCardVisible(true);
  }, []);

  return (
    <div
      className={`watch-card ${isCardVisible ? "animate-card" : ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <Link className="watch-image-wrapper" to={`/watches/${id}`}>
        <img src={imgUrl} alt={name} />
      </Link>
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
      <button className="add-to-cart-btn" onClick={() => addToCart(id, 1)}>
        <FontAwesomeIcon icon={faAdd} className="add-icon" />
        Add To Cart
      </button>
    </div>
  );
};

export default WatchCard;
