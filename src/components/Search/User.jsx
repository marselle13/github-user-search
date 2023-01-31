import classes from "./User.module.css";
import icon from "../../assets/Bitmap.png";
import UserGit from "./UserGit";
import UserSocial from "./UserSocial";
import { useContext } from "react";
import APIContext from "../../store/apiContext";

const User = () => {
  const themeCtx = useContext(APIContext);

  return (
    <section className={classes.searchResultContainer}>
      <div className={classes.desktop}>
        <img src={icon} alt="user-icon" />
      </div>
      <div className={`${classes.data} ${classes[themeCtx.theme]}`}>
        <div className={classes.nameDateDiv}>
          <div className={classes.mobile}>
            <img src={icon} alt="user-icon" className={classes.iconMobile} />
          </div>
          <div className={classes.infoDiv}>
            <div>
              <h2>The Octocat</h2>
              <a href="#">@octocat</a>
            </div>
            <div>
              <p> Joined 25 Jan 2011</p>
            </div>
          </div>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </p>
        </div>
        <UserGit />
        <UserSocial />
      </div>
    </section>
  );
};

export default User;
