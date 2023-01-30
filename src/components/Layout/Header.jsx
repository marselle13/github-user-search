import ThemeButton from "./ThemeButton";
import classes from "./Header.module.css";
import { useContext } from "react";
import APIContext from "../../store/apiContext";

const Header = () => {
  const textCtx = useContext(APIContext);

  return (
    <header className={classes.header}>
      <h1 className={classes[textCtx.theme]}>devfinder</h1>
      <ThemeButton />
    </header>
  );
};

export default Header;
