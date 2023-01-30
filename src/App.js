import Header from "./components/Layout/Header";
import classes from "./App.module.css";
import { useContext } from "react";
import APIContext from "./store/apiContext";

function App() {
  const bodyctx = useContext(APIContext);
  const body = (document.body.className = classes[bodyctx.theme]);

  return (
    <div className={classes.wrapper}>
      <Header />
    </div>
  );
}

export default App;
