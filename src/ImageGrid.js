import React from 'react';

function ImageGrid({ images }) {
    images.forEach((image) => {
        console.log(image.src);
      });
    return (
        <div className="image-grid">
            {images.map((image, index) => (
                <div key={index} className="grid-item">
                    <img src={image.src} />
                </div>
            ))}
        </div>
    );
}

export default ImageGrid;
