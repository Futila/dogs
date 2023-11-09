import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { PHOTO_GET } from "../../services/api";
import Error from "../../helpers/Error";
import Loading from "../../helpers/Loading";
import PhotoContent from "../Photo/PhotoContent";

import styles from "./FeedModal.module.css";

const FeedModal = ({ photo }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { options, url } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <div className={styles.modal}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
