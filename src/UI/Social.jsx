import { useContext } from "react";
import APIContext from "../store/apiContext";
import classes from "./Wrapper.module.css";

const Social = (props) => {
  const themeCtx = useContext(APIContext);

  return (
    <div
      className={classes.social}
      style={{ opacity: props.data || props.link ? "1" : "0.5" }}
    >
      <img src={props.icon} alt="icon" />
      {props.link ? (
        <a
          href={props.link}
          style={{ color: themeCtx.theme === "light" ? "#697c9a" : "#fff" }}
        >
          {"Blog" || "Not Available"}
        </a>
      ) : (
        <p className={classes[themeCtx.theme]}>
          {props.data || "Not Available"}
        </p>
      )}
    </div>
  );
};

export default Social;
