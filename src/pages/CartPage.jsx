import { useEffect, useMemo } from "react";
import CartButton from "../components/CartButton";
import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem";

const CartPage = ({ watches, cart, deleteFromCart, cartLength }) => {
  const watchesInCart = useMemo(
    () =>
      watches
        .filter((watch) => watch.id in cart)
        .map((watch) => ({ ...watch, quantity: cart[watch.id] })),
    [cart, watches]
  );

  const totalPrice = useMemo(() => {
    return watchesInCart.reduce(
      (sum, curr) => sum + curr.quantity * curr.price,
      0
    );
  }, [cart]);

  return (
    <>
      <div className="page" id="cart-page">
        <Navbar />
        <h1 className="page-title">Cart</h1>
        {watchesInCart.length === 0 && <h3>There are no items in the cart!</h3>}
        {watchesInCart.length > 0 && (
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Product Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {watchesInCart.map((watch) => (
                <CartItem
                  item={watch}
                  key={watch.id}
                  deleteFromCart={deleteFromCart}
                />
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4">
                  <h2>TOTAL</h2>
                </td>
                <td>
                  <h3>{totalPrice}$</h3>
                </td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
      <CartButton cartLength={cartLength} />
    </>
  );
};

export default CartPage;
