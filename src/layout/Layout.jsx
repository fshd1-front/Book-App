import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="#">Tarak</a> | React.js
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Farshad with ❤️</p>
      </footer>
    </>
  );
};

export default Layout;
