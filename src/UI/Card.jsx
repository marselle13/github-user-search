import { useContext } from "react";
import APIContext from "../store/apiContext";
import classes from "./Card.module.css";

const Card = (props) => {
  const themeCtx = useContext(APIContext);

  return (
    <div className={`${classes.card} ${classes[themeCtx.theme]}`}>
      {props.children}
    </div>
  );
};

export default Card;
