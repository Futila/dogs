import { UserPost } from "./endpoints/UserPost";
import { TokenPost } from "./endpoints/TokenPost";
import { PhotoPost } from "./endpoints/PhotoPost";

const Api = () => {
  return (
    <div>
      <h2>USER POST</h2>
      <UserPost />

      <h2>TOKEN POST</h2>
      <TokenPost />

      <h2>PHOTO POST</h2>
      <PhotoPost />
    </div>
  );
};

export { Api };
