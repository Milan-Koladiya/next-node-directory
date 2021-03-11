import "../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const MyApp = ({ Component, pageProps }) => {
  console.log("This is _app component");
  return <Component {...pageProps} />;
};

export default MyApp;
