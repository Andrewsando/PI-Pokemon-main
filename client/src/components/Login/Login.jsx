import styles from "./login.module.css";

const login = ({ access }) => {
  const handlesubmit = (event) => {
    event.preventDefault();
    access();
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.welcome}>Welcome to the Pokemon's API</h1>
      <button className={styles.button} onClick={handlesubmit}>
        {" "}
        Log In{" "}
      </button>
    </div>
  );
};

export default login;
