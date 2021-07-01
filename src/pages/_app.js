import { useState } from "react";
import Cookies from "js-cookie";
import { IconContext } from "react-icons";
import Footer from "../components/footer";
import "../shared/styles/app.scss";
import "../shared/styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    Cookies.set("viewTheme", !theme, { expires: 1 });
    setTheme(!theme);
  };

  return (
    <IconContext.Provider value={{ color: "inherit" }}>
      <Component {...pageProps} theme={theme} />
      <Footer theme={theme} action={toggleTheme} />
    </IconContext.Provider>
  );
}

export default MyApp;
