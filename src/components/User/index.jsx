import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import UserHeader from "./UserHeader";
import Feed from "../Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";
import NotFound from "../NotFound";

import Head from "../../helpers/Head";

import { UserContext } from "../../context/UserContext";

const User = () => {
  const { data } = useContext(UserContext);
  return (
    <section className="container">
      <Head title="My Account" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="/post" element={<UserPhotoPost />} />
        <Route path="/stats" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
