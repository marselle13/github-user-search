import ThemeButton from "./ThemeButton";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>devfinder</h1>
      <ThemeButton />
    </header>
  );
};

export default Header;
