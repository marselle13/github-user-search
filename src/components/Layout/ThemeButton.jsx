import classes from "./ThemeButton.module.css";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
import { useContext } from "react";
import APIContext from "../../store/apiContext";
const ThemeButton = () => {
  const themeCtx = useContext(APIContext);

  return (
    <div className={classes.buttonDiv}>
      <button
        onClick={themeCtx.themeSwitcher}
        className={classes[themeCtx.theme]}
      >
        <div className={`${classes.buttonItems} ${classes[themeCtx.theme]}`}>
          {themeCtx.theme !== "dark" ? "Dark" : "Light"}
          {themeCtx.theme !== "dark" ? <MoonIcon /> : <SunIcon />}
        </div>
      </button>
    </div>
  );
};

export default ThemeButton;
