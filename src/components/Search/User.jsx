import classes from "./User.module.css";
import icon from "../../assets/Bitmap.png";
import UserGit from "./UserGit";
import UserSocial from "./UserSocial";
import { useContext } from "react";
import APIContext from "../../store/apiContext";

const User = () => {
  const themeCtx = useContext(APIContext);
  const { userData } = themeCtx;
  console.log(userData);
  const date = new Date(userData.create);
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.getDay();

  return (
    <section className={classes.searchResultContainer}>
      <div className={classes.desktop}>
        <img
          src={userData.avatar}
          alt="user-icon"
          className={classes.iconDesktop}
        />
      </div>
      <div className={`${classes.data} ${classes[themeCtx.theme]}`}>
        <div className={classes.nameDateDiv}>
          <div className={classes.mobile}>
            <img
              src={userData.avatar}
              alt="user-icon"
              className={classes.iconMobile}
            />
          </div>
          <div className={classes.infoDiv}>
            <div>
              <h2>{userData.name}</h2>
              <a href={userData.url}>@{userData.login}</a>
            </div>
            <div>
              <p>
                {" "}
                Joined {day} {month} {year}
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>{userData.bio || "This profile has no bio"}</p>
        </div>
        <UserGit />
        <UserSocial />
      </div>
    </section>
  );
};

export default User;
