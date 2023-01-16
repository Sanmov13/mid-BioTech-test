import { useState } from "react";
import styles from "../styles/auth.module.css";
import { users } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notify = () =>
    toast("Вы не авторизованы!", {
      type: "error",
    });

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    if (email === users[0].email && password === users[0].password) {
      localStorage.setItem("user", JSON.stringify(users[0]));
      navigate("/");
      setEmail("");
      setPassword("");
    } else if (email === users[1].email && password === users[1].password) {
      localStorage.setItem("user", JSON.stringify(users[1]));
      navigate("/");
      setEmail("");
      setPassword("");
    } else {
      notify();
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.main}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={handlePass}
          />
          <button className={styles.btn} onClick={handleClick}>
            Войти
          </button>
          <p>Забыли пароль?</p>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Auth;
