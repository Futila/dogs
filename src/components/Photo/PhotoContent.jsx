import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../context/UserContext";

import PhotoComments from "./PhotoComments";
import PhotoDelete from "./PhotoDelete";

import styles from "./PhotoContent.module.css";

const PhotoContent = ({ data }) => {
  const user = useContext(UserContext);
  const { photo, comments } = data;
  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
      </div>

      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/profile/${photo.author}`}>@{photo.author}</Link>
            )}

            <span className={styles.views}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/photo/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade} years</li>
          </ul>
        </div>
      </div>

      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
