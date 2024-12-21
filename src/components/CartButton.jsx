import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const CartButton = () => {
  return (
    <Link to="/cart" id="open-cart-btn">
      <FontAwesomeIcon icon={faCartShopping} />
    </Link>
  );
};

export default CartButton;
