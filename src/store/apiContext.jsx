import React, { useState } from "react";

const APIContext = React.createContext({
  userData: {},
  theme: "dark",
  themeSwitcher: () => {},
  onChangeUsername: (event) => {},
  submit: (e) => {},
});

export const APIContextProvider = (props) => {
  const [userData, setUserData] = useState({});
  const [theme, setTheme] = useState("light");
  const [username, setUsername] = useState("octocat");

  const themeHandler = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    getUserData();
  };

  async function getUserData() {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    setUserData({
      avatar: data.avatar_url,
      name: data.name,
      login: data.login,
      bio: data.bio,
      create: data.created_at,
      repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      company: data.company,
      location: data.location,
      twitter: data.twitter_username,
      blog: data.blog,
    });
  }

  return (
    <APIContext.Provider
      value={{
        themeSwitcher: themeHandler,
        theme: theme,
        onChangeUsername: usernameHandler,
        submit: submitHandler,
        userData: userData,
      }}
    >
      {props.children}
    </APIContext.Provider>
  );
};

export default APIContext;
