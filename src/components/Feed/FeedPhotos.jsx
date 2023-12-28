import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { PHOTOS_GET } from "../../services/api";
import Error from "../../helpers/Error";
import Loading from "../../helpers/Loading";
import FeedPhotosItem from "./FeedPhotosItem";

import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { loading, error, request, data } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 3;
      const { options, url } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);

      //To check if we are in the last page
      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }

      console.log(json);
    }

    fetchPhotos();
  }, [request, user, page, setInfinite]);

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
