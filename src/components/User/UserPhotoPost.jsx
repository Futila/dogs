import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../hooks/useForm";
import Error from "../../helpers/Error";
import Head from "../../helpers/Head";

import { PHOTO_POST } from "../../services/api";
import useFetch from "../../hooks/useFetch";

import styles from "./UserPhotoPost.module.css";

const UserPhotoStats = () => {
  const name = useForm();
  const weight = useForm("number");
  const age = useForm("number");
  const [img, setImg] = useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate("/account");
    }
  }, [data, navigate]);

  const handleUploadPhoto = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", name.value);
    formData.append("peso", weight.value);
    formData.append("idade", age.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);

    request(url, options);
  };

  const handleImgChange = ({ target }) => {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  };
  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Post your photo" />
      <form onSubmit={handleUploadPhoto}>
        <Input label="Name" type="text" name="name" {...name} />
        <Input label="Weight" type="number" name="weight" {...weight} />
        <Input label="Age" type="number" name="age" {...age} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Uploading</Button>
        ) : (
          <Button>Upload</Button>
        )}

        <Error error={error} />
      </form>

      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url(${img.preview})` }}
          ></div>
        )}
      </div>
    </section>
  );
};

export default UserPhotoStats;
