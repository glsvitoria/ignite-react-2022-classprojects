import styles from "./styles.module.scss";
import { PencilLine } from "@phosphor-icons/react";
import { Avatar } from "../Avatar";

const author = {
  avatarUrl: 'https://github.com/glsvitoria.png',
  name: 'Guilherme Vitória',
  role: 'Intern @ VFlows'
}

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
      />

      <div className={styles.profile}>
        <Avatar src={author.avatarUrl} title={author.name} />

        <strong>{author.name}</strong>
        <span>{author.role}</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
