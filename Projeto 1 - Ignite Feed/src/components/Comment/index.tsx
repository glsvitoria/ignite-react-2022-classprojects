import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { useCallback, useState } from "react";
import { CommentType } from "../../../@types/@types";
import { Avatar } from "../Avatar";
import Modal from "../Modal";
import styles from "./styles.module.scss";

interface ICommentProps {
  comment: CommentType;
  onDeleteComment: (id: string) => void;
}

export function Comment({ comment, onDeleteComment }: ICommentProps) {
  const [likesCount, setLikesCount] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleDeleteComment = useCallback(() => {
    onDeleteComment(comment.id);
  }, []);

  const handleLikeComment = useCallback(() => {
    setLikesCount(state => state + 1);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  return (
    <div className={styles.comment}>
      <Avatar src={comment.avatarUrl} hasBorder={false} title={comment.name} />

      <div className={styles.commentBox}>
        <div
          className={
            comment.isActiveUser
              ? `${styles.commentContent} ${styles.isActivityUserComment}`
              : `${styles.commentContent}`
          }
        >
          <header>
            <div className={styles.authorAndTime}>
              <strong>{comment.name}</strong>

              <time
                title="15 de março as 12:35h"
                dateTime="2023-15-03 12:35:30"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button
              title="Deletar comentário"
              onClick={() => {
                setModalIsOpen(true);
              }}
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{comment.content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp /> Curtir <span>{likesCount}</span>
          </button>
        </footer>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        className={styles.modal}
      >
        <h1>Excluir comentário</h1>

        <p>Você tem certeza que gostaria de excluir este comentário?</p>

        <div className={styles.divButtons}>
          <button
            type="button"
            onClick={() => {
              setModalIsOpen(false);
            }}
          >
            Cancelar
          </button>
          <button
            type="button"
            className={styles.deleteButton}
            onClick={handleDeleteComment}
          >
            Sim, excluir
          </button>
        </div>
      </Modal>
    </div>
  );
}
