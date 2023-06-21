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

const illus = [];

for (let index = 1; index <= 22; index++) {
  const image = new Image();
  image.src = require(`./images/il${index.toString().padStart(2, '0')}.png`);
  image.alt = `Image ${index}`;

  image.onload = function() {
    const width = image.width;
    const height = image.height;

    const imageObillusect = {
      src: image.src,
      alt: image.alt,
      width: width,
      height: height,
      isSelected: false,
    };

    illus.push(imageObillusect);
  };
}



illus.forEach((image) => {
  console.log(image.src);
});
function Illustrations() {
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <Navbar></Navbar>
      <PhotoAlbum photos={illus} layout="rows" targetRowHeight={400} onClick={({ index }) => setIndex(index)} />

      <Lightbox
                slides={illus}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
    </div>
  );
}

export default Illustrations;
