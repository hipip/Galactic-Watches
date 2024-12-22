import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CartButton = ({ cartLength }) => {
  return (
    <Link to="/cart" id="open-cart-btn">
      <FontAwesomeIcon icon={faCartShopping} />
      {cartLength > 0 && <p className="cart-items-length">{cartLength}</p>}
    </Link>
  );
};

export default CartButton;
