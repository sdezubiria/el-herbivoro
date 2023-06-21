import React from 'react';
import Navbar from './NavBar';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";

const i = [];

for (let index = 1; index <= 21; index++) {
  const image = {
    src: require(`./images/i${index.toString().padStart(2, '0')}.png`),
    alt: `Image ${index}`,
    width: 300,
    height: 300,
    isSelected: false,
  };
  i.push(image);
}


i.forEach((image) => {
  console.log(image.src);
});
function SecondPage() {
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <Navbar></Navbar>
      <PhotoAlbum photos={i} layout="rows" targetRowHeight={400} onClick={({ index }) => setIndex(index)} />

      <Lightbox
                slides={i}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
    </div>
  );
}

export default SecondPage;
