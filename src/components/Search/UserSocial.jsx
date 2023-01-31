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
  const { userData } = themeCtx;
  console.log(userData);

  return (
    <section className={classes.socialDiv}>
      <Social icon={location} data={userData.location} />
      <Social icon={twitter} data={userData.twitter} />
      <Social icon={website} link={userData.blog} />
      <Social icon={company} data={userData.company} />
    </section>
  );
};

export default UserSocial;
