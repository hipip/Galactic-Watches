import CartButton from "../components/CartButton";
import Navbar from "../components/Navbar";
import WatchCard from "../components/WatchCard";

const WatchesPage = ({ watches, addToCart, cartLength }) => {
  return (
    <>
      <div id="watches-page" className="page">
        <Navbar />
        <h1 className="page-title">Our Watches</h1>
        <div className="watches-container">
          {watches.map((watch, idx) => (
            <WatchCard
              key={watch.id}
              watch={watch}
              delay={idx * 0.1}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
      <CartButton cartLength={cartLength} />
    </>
  );
};

export default WatchesPage;
