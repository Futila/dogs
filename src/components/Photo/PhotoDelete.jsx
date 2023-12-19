import { PHOTO_DELETE } from "../../services/api";
import useFetch from "../../hooks/useFetch";

import styles from "./PhotoDelete.module.css";

const PhotoDelete = ({ id }) => {
  const { loading, request } = useFetch();

  const handleDeletePhoto = async () => {
    const confirm = window.confirm("Are sure you want to delete ?");

    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);

      const response = await request(url, options);
      if (response) window.location.reload();
    }
  };

  return (
    <>
      {loading ? (
        <button className={styles.delete} disabled>
          Delete
        </button>
      ) : (
        <button className={styles.delete} onClick={handleDeletePhoto}>
          Delete
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
