import { useContext } from "react";
import APIContext from "../../store/apiContext";
import classes from "./UserGit.module.css";

const UserGit = () => {
  const themeCtx = useContext(APIContext);
  const { userData } = themeCtx;

  return (
    <div className={`${classes.gitContainer} ${classes[themeCtx.theme]}`}>
      <ul>
        <li>
          <p>Repos</p>
          <h3>{userData.repos}</h3>
        </li>
        <li>
          <p>Followers</p>
          <h3>{userData.followers}</h3>
        </li>
        <li>
          <p>Following</p>
          <h3>{userData.following}</h3>
        </li>
      </ul>
    </div>
  );
};

export default UserGit;
