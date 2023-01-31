import React, { useState } from "react";

const APIContext = React.createContext({
  theme: "dark",
  themeSwitcher: () => {},
});

export const APIContextProvider = (props) => {
  const [theme, setTheme] = useState("light");

  const themeHandler = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <APIContext.Provider value={{ themeSwitcher: themeHandler, theme: theme }}>
      {props.children}
    </APIContext.Provider>
  );
};

export default APIContext;
