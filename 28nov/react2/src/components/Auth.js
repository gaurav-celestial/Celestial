import { authActions } from "../store/auth";
import classes from "./Auth.module.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  console.log(isAuth);

  const handleClick = function () {
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={handleClick}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
