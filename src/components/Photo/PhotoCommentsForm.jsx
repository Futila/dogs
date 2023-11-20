import React from "react";
import useFetch from "../../hooks/useFetch";
import { COMMENT_POST } from "../../services/api";

import Enviar from "../../assets/enviar.svg?react";
import styles from "./PhotoCommentsForm.module.css";

import Error from "../../helpers/Error";

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();

  const handleSubmitComment = async (event) => {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);

    if (response.ok) {
      setComment("");
      setComments((previousComments) => [...previousComments, json]);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmitComment}>
      <textarea
        className={styles.textarea}
        name="coment"
        id="coment"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        placeholder="Type a comment..."
      ></textarea>

      <button className={styles.button}>
        <Enviar />
      </button>

      <Error error={error} />
    </form>
  );
};
export default PhotoCommentsForm;
