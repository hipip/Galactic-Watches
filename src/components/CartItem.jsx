import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = ({ item, deleteFromCart }) => {
  const { id, imgUrl, quantity, price } = item;
  return (
    <tr className="cart-row">
      <td className="cart-row-id">{id}</td>
      <td className="cart-row-img">
        <img src={imgUrl} alt="produc Image" />
      </td>
      <td className="cart-row-price">{price}</td>
      <td className="cart-row-qte">{quantity}</td>
      <td className="cart-row-total">{quantity * price}$</td>
      <button
        type="button"
        className="cart-row-delete-btn"
        onClick={() => {
          console.log("now");
          deleteFromCart(id);
        }}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </tr>
  );
};

export default CartItem;
