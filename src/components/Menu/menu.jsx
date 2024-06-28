import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <nav className={styles.container}>
      <div>logo</div>
      <ul className={styles.items}>
        <li>
          <a href="#offer">Our offer</a>
        </li>
        <li>
          <a hred="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
