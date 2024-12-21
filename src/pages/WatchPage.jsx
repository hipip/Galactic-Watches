import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CartButton from "../components/CartButton";
import Popup from "../components/Popup";

const Watchpage = ({ watches, addToCart }) => {
  const { watchId } = useParams();
  const watch = watches.find((w) => w.id === parseInt(watchId));
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };
  return (
    <>
      <div id="watch-page" className="page">
        <Navbar />
        <h1 className="page-title">Watch Details</h1>
        <div className="watch-page-card">
          <div className="watch-page-card-img-wrapper">
            <img
              src={watch.imgUrl}
              alt={watch.description}
              className="watch-page-card-img"
            />
          </div>
          <div className="watch-page-card-text-area">
            <h2 className="watch-page-card-title">{watch.name}</h2>
            <div className="watch-page-card-rating-price">
              <div className="watch-page-card-rating">
                {watch.rating} <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="watch-page-card-price">{watch.price}$</div>
            </div>
            <div className="watch-page-card-description">
              {watch.description}
            </div>
            <div className="add-to-cart-container">
              <div className="inp-container">
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  min="0"
                  name="quantity"
                  className="qte-inp"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <button
                type="button"
                id="add-to-cart-btn"
                onClick={() => {
                  addToCart(parseInt(watchId), parseInt(quantity));
                  handleShowPopup();
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <CartButton />
      {showPopup && (
        <Popup
          bgColor="#009b1a"
          message="Item Added to Cart successfully!"
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default Watchpage;
