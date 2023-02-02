import React, { useEffect, useState } from "react";

const APIContext = React.createContext({
  noUser: false,
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
  const [noUser, setNoUser] = useState(false);
  const themeHandler = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const getUserData = async function () {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(true);
      }
      setNoUser(false);
      setUserData({
        avatar: data.avatar_url,
        name: data.name,
        login: data.login,
        url: data.html_url,
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
    } catch (err) {
      setNoUser(true);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (username.length > 0) {
      getUserData();
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <APIContext.Provider
      value={{
        themeSwitcher: themeHandler,
        theme: theme,
        onChangeUsername: usernameHandler,
        submit: submitHandler,
        userData: userData,
        noUser: noUser,
      }}
    >
      {props.children}
    </APIContext.Provider>
  );
};

export default APIContext;
