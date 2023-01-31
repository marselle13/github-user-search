import classes from "./Wrapper.module.css";

const Wrapper = (props) => {
  return <div className={classes.result}>{props.children}</div>;
};

export default Wrapper;
