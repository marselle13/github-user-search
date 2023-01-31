import Card from "../../../UI/Card";
import search from "../../../assets/icon-search.svg";
import classes from "./SearchBar.module.css";
import { useContext } from "react";
import APIContext from "../../../store/apiContext";

const SearchBar = () => {
  const themeCtx = useContext(APIContext);
  return (
    <Card>
      <div className={classes.searchContainer}>
        <div>
          <img src={search} alt="search" />
        </div>
        <form>
          <input
            type="text"
            placeholder="Search GitHub username…"
            className={classes[themeCtx.theme]}
          />
          <button>Search</button>
        </form>
      </div>
    </Card>
  );
};

export default SearchBar;
