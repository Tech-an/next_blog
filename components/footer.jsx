import Logo from "./logo";
import styles from "styles/footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.flexContainer}>
        <Logo />
      </div>
    </footer>
  );
}
