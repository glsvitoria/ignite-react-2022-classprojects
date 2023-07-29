import styles from "./styles.module.scss";
import IgniteLogo from "../../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={IgniteLogo} alt="Logo do Ignite Feed" />
      Ignite Feed
    </header>
  );
}
