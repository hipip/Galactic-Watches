import Navbar from "../components/Navbar";

const ErrorPage = () => {
  return (
    <div id="error-page" className="page">
      <Navbar />
      <div className="fl">
        <h1 className="page-title">Page Not Found</h1>
        <h2>Oops! The page you're looking for doesn't exist.</h2>
      </div>
    </div>
  );
};

export default ErrorPage;
