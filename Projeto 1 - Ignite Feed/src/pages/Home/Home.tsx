import { Header } from "../../components/Header";

import styles from "./styles.module.scss";
import { Post } from "../../components/Post";
import { Sidebar } from "../../components/Sidebar";
import { PostType } from "../../../@types/@types";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/glsvitoria.png",
      name: "Guilherme Vitória",
      role: "Intern @ VFlows",
    },
    publishedAt: new Date("2023-03-15 12:00:00"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/LucasReisV1337.png",
      name: "Lucas Reis",
      role: "@ Kofre",
    },
    publishedAt: new Date("2023-03-15 12:00:00"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
  },
];

export function Home() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}
