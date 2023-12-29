import React from "react";

import Feed from "../Feed";
import Loading from "../../helpers/Loading";
import Head from "../../helpers/Head";

function Home() {
  return (
    <section className="container mainContainer">
      <Head title="Photos" description="Dogs home page, with feed photos" />
      <Feed />
    </section>
  );
}

export default Home;
