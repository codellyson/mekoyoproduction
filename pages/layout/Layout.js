import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { ToggleTheme } from "../../components/ToggleTheme/ToggleTheme";
const Layout = ({ children }) => {
  const [isDark, setIsDark] = React.useState(false);
  const handleToggleTheme = () => {
    if (isDark) {
      setIsDark(!isDark);
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
      setIsDark(!isDark);
    }
  };
  React.useEffect(() => {
    handleToggleTheme();
  }, []);
  return (
    <>
      <main>{children}</main>
      <Footer />
      {/* <ToggleTheme isDark={isDark} toggleDarkMode={handleToggleTheme} /> */}
    </>
  );
};

export default Layout;
