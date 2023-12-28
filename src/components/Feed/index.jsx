import { useState, useEffect } from "react";

import FeedPhotos from "./FeedPhotos";
import FeedModal from "./FeedModal";

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = useState(null);

  const [pages, setPages] = useState([1]);

  const [infinite, setInfinite] = useState(true);

  //1 - firt verification: check if got in the end of the page
  useEffect(() => {
    let wait = false; // to not activate setPages many times
    function inifiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY; // Total os scroll in the page
        const height = document.body.offsetHeight - window.innerHeight; // Height of the page

        //75% of scroll
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);

          wait = true;

          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("wheel", inifiniteScroll);
    window.addEventListener("scroll", inifiniteScroll);

    return () => {
      window.removeEventListener("wheel", inifiniteScroll);
      window.removeEventListener("scroll", inifiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
};

export default Feed;
