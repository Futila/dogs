import { useParams } from "react-router-dom";
import Feed from "../Feed";

import Head from "../../helpers/Head";

const UserProfile = () => {
  const { user } = useParams();
  return (
    <section className="container mainSection">
      <Head title={user} />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
