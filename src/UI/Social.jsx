import { useContext } from "react";
import APIContext from "../store/apiContext";
import classes from "./Wrapper.module.css";

const Social = (props) => {
  const themeCtx = useContext(APIContext);

  return (
    <div className={classes.social}>
      <img src={props.icon} alt="icon" />
      {props.children}
    </div>
  );
};

export default Social;
