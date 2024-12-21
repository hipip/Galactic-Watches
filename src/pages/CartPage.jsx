import { useEffect } from "react";
import CartButton from "../components/CartButton";
import Navbar from "../components/Navbar";

const CartPage = ({ watches, cart }) => {
  useEffect(() => {
    console.log(cart);
  }, []);
  return (
    <>
      <div className="page" id="cart-page">
        <Navbar />
        <h1 className="page-title">Cart</h1>
      </div>
      <CartButton />
    </>
  );
};

export default CartPage;
