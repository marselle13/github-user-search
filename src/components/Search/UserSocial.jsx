import Social from "../../UI/Social";
import location from "../../assets/icon-location.svg";
import twitter from "../../assets/icon-twitter.svg";
import website from "../../assets/icon-website.svg";
import company from "../../assets/icon-company.svg";
import classes from "./UserSocial.module.css";
import { useContext } from "react";
import APIContext from "../../store/apiContext";

const UserSocial = () => {
  const themeCtx = useContext(APIContext);
  const theme = themeCtx.theme;

  return (
    <section className={classes.socialDiv}>
      <Social icon={location}>
        <p>San Francisco</p>
      </Social>
      <Social icon={twitter}>
        <p>Not Available</p>
      </Social>
      <Social icon={website} className={classes.socialDivlight}>
        <a
          href="https://github.blog"
          style={{ color: themeCtx.theme === "light" ? "#4b6a9b" : "#fff" }}
        >
          https://github.blog
        </a>
      </Social>
      <Social icon={company}>
        <p>@github</p>
      </Social>
    </section>
  );
};

export default UserSocial;
