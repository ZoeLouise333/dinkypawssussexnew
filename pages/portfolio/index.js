import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import React, { useEffect, useState } from "react";
import images from "../../constants/images.js";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const changeSelectedImage = (image) => {
    setSelectedImage(image);
  };

  const onLeftClick = (e) => {
    if (e != null) {
      e.preventDefault();
      e.stopPropagation();
    }
    // find the index of the current selected image
    const index = images.indexOf(selectedImage);
    if (index > 0) {
      changeSelectedImage(images[index - 1]);
    }
  };

  const onRightClick = (e) => {
    if (e != null) {
      e.preventDefault();
      e.stopPropagation();
    }

    // find the index of the current selected image
    const index = images.indexOf(selectedImage);
    if (index < images.length - 1) {
      changeSelectedImage(images[index + 1]);
    }
  };

  const onCloseClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedImage(null);
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (selectedImage != null) {
        if (e.keyCode === 39) {
          // move right
          onRightClick();
        } else if (e.keyCode === 37) {
          // move left
          onLeftClick();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      <Head>
        <title>Dinky Paws | Puppy Services | Somerset</title>
      </Head>

      <Header />

      <div>
        <div className="centerbb container-offer">
          <div class="subSection">
            <h2 class="title tc white">East Sussex Dogs and Cat Pictures</h2>
            <h5 class="info3 white">Coming soon... </h5>
          </div>
        </div>
        <div>
          <div className="centerbb container-offer">
            <div class="subSection">
              <h2 class="title tc white">Somerset Dogs and Cat Pictures</h2>
              <h5 class="info3 white">Coming soon... </h5>
            </div>
          </div>
          <br />
          <br />
          <br />

          {/*{selectedImage != null && (
          <div className="lightbox" onClick={() => setSelectedImage(null)}>
            <a href="#" onClick={onLeftClick}>
              ←
            </a>
            <a href="#" className="closeButton" onClick={onCloseClick}>
              <img src="/images/icons/close.svg" />
            </a>
            {images.map((image) => {
              return (
                <img
                  className="image"
                  src={image}
                  style={{ opacity: selectedImage === image ? 1 : 0 }}
                />
              );
            })}

            <a href="#" onClick={onRightClick}>
              ←
            </a>
          </div>
        )}
        <div className="masonry__padding">
          <div className="masonry">
            {images.map((image) => {
              return (
                <div
                  className="grid"
                  key={image}
                  onClick={() => changeSelectedImage(image)}
                >
                  <img src={image} />
                </div>
              );
            })}
          </div>
        </div>
        */}
        </div>
        <Footer />
      </div>
    </>
  );
}
