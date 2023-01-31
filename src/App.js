import Header from "./components/Layout/Header";
import classes from "./App.module.css";
import { useContext } from "react";
import APIContext from "./store/apiContext";
import SearchBar from "./components/Search/SearchBar";
import SearchResult from "./components/Search/SearchResult";

function App() {
  const bodyctx = useContext(APIContext);
  document.body.className = classes[bodyctx.theme];

  return (
    <div className={classes.wrapper}>
      <Header />
      <SearchBar />
      <SearchResult />
    </div>
  );
}

export default App;
