import { IconContext } from "react-icons";
import Footer from "../components/footer";
import "../shared/styles/app.scss";
import "../shared/styles/globals.scss";

function MyApp({ Component, pageProps }) {
  let theme = true;
  return (
    <IconContext.Provider value={theme ? { color: "#000" } : { color: "#fff" }}>
      <Component {...pageProps} theme={theme} />
      <Footer />
    </IconContext.Provider>
  );
}

export default MyApp;
