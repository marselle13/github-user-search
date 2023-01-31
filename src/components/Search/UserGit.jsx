import { useContext } from "react";
import APIContext from "../../store/apiContext";
import classes from "./UserGit.module.css";

const UserGit = () => {
  const themeCtx = useContext(APIContext);

  return (
    <div className={`${classes.gitContainer} ${classes[themeCtx.theme]}`}>
      <ul>
        <li>
          <p>Repos</p>
          <h3>8</h3>
        </li>
        <li>
          {" "}
          <p>Followers</p>
          <h3>3938</h3>
        </li>
        <li>
          {" "}
          <p>Following</p>
          <h3>9</h3>
        </li>
      </ul>
    </div>
  );
};

export default UserGit;
