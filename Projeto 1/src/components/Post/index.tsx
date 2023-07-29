import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useCallback, useRef, useState } from "react";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./styles.module.scss";
import * as Yup from "yup";
import Textarea from "../Form/Textarea";
import getValidationErrors from "../../utils/getValidationErrors";
import { v4 as uuidv4 } from "uuid";
import { CommentType, PostType } from "../../../@types/@types";

type handleCreateNewCommentDataType = {
  txtComment: string;
};

interface IPostProps {
  post: PostType;
}

const commentsArray: CommentType[] = [
  {
    id: uuidv4(),
    content: "Post muito bacana, hein?!",
    name: "Guilherme Bonfim",
    avatarUrl: "https://github.com/guisbonfim.png",
    isActiveUser: false,
  },
  {
    id: uuidv4(),
    content: "Que massa mano, parabéns",
    name: "Fábio José",
    avatarUrl: "https://github.com/F4bioJose.png",
    isActiveUser: false,
  },
];

export function Post({ post }: IPostProps) {
  const { author, content, publishedAt } = post;
  const formRef = useRef<FormHandles>(null);
  const [comments, setComments] = useState<CommentType[]>(commentsArray);

  const publishedDateTitle = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });
  const publishedDateTime = format(publishedAt, "dd/MM/yyyy - HH:mm:ss");

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = useCallback(
    async (data: handleCreateNewCommentDataType) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          txtComment: Yup.string().required("Digite algum comentário"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        setComments(state => [
          ...state,
          {
            id: uuidv4(),
            content: data.txtComment,
            name: "Guilherme Vitória",
            avatarUrl: "https://github.com/glsvitoria.png",
            isActiveUser: true,
          },
        ]);

        formRef.current?.reset();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [],
  );

  const onDeleteComment = useCallback((id: string) => {
    setComments(state => state.filter(item => item.id !== id));
  }, []);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} title={author.name} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateTitle} dateTime={publishedDateTime}>
          Publicado {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(item => {
          if (item.type === "paragraph")
            return <p key={String(Math.random())}>{item.content}</p>;
          return (
            <p key={String(Math.random())}>
              <a href="#">{item.content}</a>
            </p>
          );
        })}
      </div>

      <Form
        onSubmit={handleCreateNewComment}
        ref={formRef}
        className={styles.commentForm}
      >
        <Textarea name="txtComment" label="Deixe seu feedback" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </Form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            onDeleteComment={onDeleteComment}
          />
        ))}
      </div>
    </article>
  );
}
