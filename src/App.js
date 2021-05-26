import React, { useState, useEffect, useCallback } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { css } from "aphrodite";
import { api } from "./api/apiUnsplash";
import Loader from "./loader/loader";
import Navbar from "./navbar/navbar";
import Cover from "./cover/cover";
import navStyle from "./Styles/NavbarStyle";
import Photo from "./Photo/photo";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [photosData, setPhotosData] = useState({
    photos: [],
    page: 1,
    perPage: 14,
    isLoading: false
  });

  const getPhotos = useCallback((page, perPage) => {
    api.photos.list({ page: page, perPage: perPage }).then((data) => {
      if (data) {
        let paginatedData = data.response.results;
        setPhotosData((prev) => ({
          ...prev,
          photos:
            page === 1
              ? [...paginatedData]
              : prev.photos.concat([...paginatedData]),
          isLoading: false
        }));
      }
    });
  }, []);

  useEffect(() => {
    getPhotos(1, 14);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, [getPhotos]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
      !photosData.isLoading
    ) {
      setPhotosData((prev) => ({
        ...prev,
        page: prev.page + 1,
        isLoading: true
      }));
      getPhotos(photosData.page + 1, 14);
    }
  };

  const { photos, isLoading } = photosData;

  let loader;

  if (photos.length < 0 || isLoading) {
    loader = <Loader />;
  }

  return (
    <div className="app">
      <Navbar />
      <Cover />
      <div className={css(navStyle.marginPhotos)}>
        <Container>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="20px">
              {photos.length &&
                photos.map((photo) => (
                  <Photo
                    key={photo.id}
                    photoUrl={photo.urls.small}
                    likes={photo.liked_by_user}
                    firstName={photo.user.first_name}
                    lastName={photo.user.last_name}
                    downloadUrl={photo.links.download}
                    profilePhoto={photo.user.profile_image.small}
                    alt={photo.alt_description}
                  />
                ))}
            </Masonry>
          </ResponsiveMasonry>
        </Container>
      </div>
      {loader}
    </div>
  );
};

export default App;
