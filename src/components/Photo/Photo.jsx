import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import { PHOTO_GET } from "../../services/api";
import Error from "../../helpers/Error";
import Loading from "../../helpers/Loading";
import PhotoContent from "./PhotoContent";

import Head from "../../helpers/Head";

const Photo = () => {
  //get data loading error request from useFetch hook
  const { data, loading, error, request } = useFetch();
  const { id } = useParams();

  useEffect(() => {
    const { options, url } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) <Error error={error} />;
  if (loading) <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent single={true} data={data} />
      </section>
    );
  else return null;
};

export default Photo;
