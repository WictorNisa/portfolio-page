import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logoText}><h2>Wictor Niså</h2></div>
      <ul className={styles.navList}>
        <li className={styles.listItem}>
          <a href="#about">About</a>
        </li>
        <li className={styles.listItem}>
          <a href="#projects">Projects</a>
        </li>
        <li className={styles.listItem}>
          <a href="#contact">Contact me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
