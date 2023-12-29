import { useEffect } from "react";

import Head from "../../helpers/Head";
import useFetch from "../../hooks/useFetch";

import { STATS_GET } from "../../services/api";

import Loading from "../../helpers/Loading";
import Error from "../../helpers/Error";

import UserStatsGraphs from "./UserStatsGraphs";

const UserStats = () => {
  const { loading, error, data, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }

    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title="Stats" />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
};

export default UserStats;
