import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { PHOTOS_GET } from "../../services/api";
import Error from "../../helpers/Error";
import Loading from "../../helpers/Loading";
import FeedPhotosItem from "./FeedPhotosItem";

import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ setModalPhoto }) => {
  const { loading, error, request, data } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const { options, url } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
      const { response, json } = await request(url, options);
      console.log(json);
    }

    fetchPhotos();
  }, [request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <ul className={styles.feed}>
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
};

export default FeedPhotos;

// TERMINAR AS IMPLEMENTAÇÕES PARA O FEED
