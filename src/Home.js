import React from "react";
import fondo1 from "./images/01.png";
import fondo2 from "./images/02.png";
import fondo3 from "./images/03.png";
import fondo4 from "./images/04.png";
import fondo5 from "./images/05.png";
import fondo6 from "./images/06.png";
import fondo7 from "./images/07.png";
import fondo8 from "./images/08.png";
import fondo9 from "./images/09.png";
import fondo10 from "./images/10.png";
import { Link } from "react-router-dom";
const imageSources = [
  fondo1,
  fondo2,
  fondo3,
  fondo4,
  fondo5,
  fondo6,
  fondo7,
  fondo8,
  fondo9,
  fondo10,
];
function Home() {
  const [currentImage, setCurrentImage] = React.useState(imageSources[0]);
  let imageCount = 0;
  React.useEffect(() => {
    const interval = setInterval(() => {
      imageCount = (imageCount + 1) % imageSources.length;
      setCurrentImage(imageSources[imageCount]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div
        className="myDiv"
        style={{ backgroundImage: `url(${currentImage})` }}
      ></div>
      <div className="scroll-container">
      <p className="scroll-text" style={{}}>
        {
          "@HERBIVORO SIMÓN DE ZUBIRÍA RESTREPO @HERBIVORO SIMÓN DE ZUBIRÍA RESTREPO @HERBIVORO SIMÓN DE ZUBIRÍA RESTREPO @HERBIVORO SIMÓN DE ZUBIRÍA RESTREPO @HERBIVORO SIMÓN DE ZUBIRÍA RESTREPO @HERBIVORO SIMÓN DE ZUBIRÍA RESTREPO         @HERBIVORO SIMÓN DE ZUBIRÍA RESTREPO @HERBIVORO SIMÓN DE ZUBIRÍA RESTREPO @HERBIVORO SIMÓN DE ZUBIRÍA RESTREPO @HERBIVORO SIMÓN DE ZUBIRÍA RESTREPO @HERBIVORO SIMÓN DE ZUBIRÍA RESTREPO @HERBIVORO SIMÓN DE ZUBIRÍA RESTREPO"
        }
      </p>
      </div>
      <div className="button-container">
        <div className="centered-buttons">
          <Link to="/second">
            <button class="button-79">3D</button>
          </Link>
          <Link to="/paintings">
            <button class="button-79">PAINTINGS</button>
          </Link>
          <Link to="/illustrations">
            <button class="button-79">ILLUSTRATIONS</button>
          </Link>
        </div>
        <div className="centered-buttons">
          <Link to="/about-contact">
            <button class="button-79">ABOUT/CONTACT</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
