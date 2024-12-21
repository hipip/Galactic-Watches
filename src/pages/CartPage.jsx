import CartButton from "../components/CartButton";
import Navbar from "../components/Navbar";

const CartPage = () => {
  return (
    <>
      <div className="page" id="cart-page">
        <Navbar />
      </div>
      <CartButton />
    </>
  );
};

export default CartPage;
