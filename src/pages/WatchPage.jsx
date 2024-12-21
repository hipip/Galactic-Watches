import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const Watchpage = ({ watches }) => {
  const { watchId } = useParams();
  const watch = watches.find((w) => w.id === watchId);
  return (
    <div id="watch-page" className="page">
      <Navbar />
      <div className="watch-page-card">{watchId}</div>
    </div>
  );
};

export default Watchpage;
