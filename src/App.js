import Header from "./components/Layout/Header";
import classes from "./App.module.css";
import { useContext } from "react";
import APIContext from "./store/apiContext";
import SearchBar from "./components/Layout/Search/SearchBar";

function App() {
  const bodyctx = useContext(APIContext);
  document.body.className = classes[bodyctx.theme];

  return (
    <div className={classes.wrapper}>
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
