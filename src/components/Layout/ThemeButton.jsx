import classes from "./ThemeButton.module.css";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
import { useContext } from "react";
import APIContext from "../../store/apiContext";
const ThemeButton = () => {
  const themeCtx = useContext(APIContext);

  return (
    <div className={classes.buttonDiv}>
      <label htmlFor="themeLabel">
        {themeCtx.theme !== "dark" ? "Dark" : "Light"}
      </label>
      <button onClick={themeCtx.themeSwitcher}>
        {themeCtx.theme !== "dark" ? (
          <MoonIcon className={classes.MoonIcon} />
        ) : (
          <SunIcon />
        )}
      </button>
    </div>
  );
};

export default ThemeButton;
