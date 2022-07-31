import classes from "./style.module.css";
import { useEffect, useRef, useState } from "react";
import { Arrows } from "../Arrows/";
import { RadioButtons } from "../RadioButtons/";

export const Slider = ({
  images,
  animationType,
  autoPlay,
  radioButtonType,
  arrowsType,
  arrowsBackground,
  arrowsBackgroundVisibility,
  arrowsSize,
  arrowsOffset,
  arrowsColor,
  radioButtonSize,
  radioButtonGap,
}) => {
  const [currentImage, setCurrentImage] = useState(0);
  const imagesRef = useRef();

  useEffect(() => {
    imagesRef.current.style.gridTemplateColumns = `repeat(${images.length}, 100%)`;
  }, [images]);

  useEffect(() => {
    if (currentImage >= images.length) setCurrentImage(currentImage - 1);
    if (currentImage < 0) setCurrentImage(0);
  }, [images]);

  useEffect(() => {
    let autoPlaying;

    if (autoPlay) {
      autoPlaying = setInterval(() => {
        rightHandler();
      }, 3000);
    } else {
      clearInterval(autoPlaying);
    }

    return () => clearInterval(autoPlaying);
  }, [autoPlay]);

  useEffect(() => {
    // style resets
    switch (animationType) {
      case "simple":
        imagesRef.current.style.transition = "none";
        imagesRef.current.childNodes.forEach((img, i) => {
          img.style.zIndex = 0;
          img.style.opacity = 1;
        });
        imagesRef.current.style.transform = "translateX(0)";
        break;

      case "slide":
        imagesRef.current.style.transition = "0.4s ease-in";
        imagesRef.current.childNodes.forEach((img, i) => {
          img.style.zIndex = 0;
          img.style.opacity = 1;
        });
        imagesRef.current.style.transform = "translateX(0)";
        break;

      case "fade":
        imagesRef.current.childNodes.forEach((img, i) => {
          img.style.zIndex = images.length - i;
        });
        imagesRef.current.style.transform = "translateX(0)";
        break;
    }
  }, [animationType]);

  useEffect(() => {
    switch (animationType) {
      case "slide":
        imagesRef.current.style.transform = `translateX(-${
          currentImage * 100
        }%)`;
        break;

      case "simple":
        imagesRef.current.style.transform = `translateX(-${
          currentImage * 100
        }%)`;
        break;

      case "fade":
        imagesRef.current.childNodes.forEach((img, i) => {
          if (i !== currentImage) img.style.opacity = 0;
        });

        imagesRef.current.childNodes[currentImage].style.opacity = 1;
        break;
    }
  }, [currentImage]);

  const leftHandler = () => {
    setCurrentImage((v) => {
      if (v === 0) return images.length - 1;
      return v - 1;
    });
  };

  const rightHandler = () => {
    setCurrentImage((v) => {
      if (v >= images.length - 1) return 0;
      return v + 1;
    });
  };

  const changeRadioImage = (i) => setCurrentImage(i);

  return (
    <div className={[classes.slider, classes[animationType]].join(" ")}>
      <div className={classes.imagesContainer}>
        <div className={classes.images} ref={imagesRef}>
          {images.map((image, i) => (
            <img
              key={i}
              className={classes.image}
              src={image}
              alt="Slider Image"
            />
          ))}
        </div>
      </div>

      <Arrows
        arrowsType={arrowsType}
        arrowsBackground={arrowsBackground}
        arrowsBackgroundVisibility={arrowsBackgroundVisibility}
        arrowsOffset={arrowsOffset}
        arrowsSize={arrowsSize}
        leftHandler={leftHandler}
        rightHandler={rightHandler}
        arrowsColor={arrowsColor}
      />

      <RadioButtons
        radioButtonType={radioButtonType}
        images={images}
        changeRadioImage={changeRadioImage}
        currentImage={currentImage}
        radioButtonSize={radioButtonSize}
        radioButtonGap={radioButtonGap}
      />

      <style jsx>{``}</style>
    </div>
  );
};

// const animations = {
//   simple: {
//     leftHandler: () => {
//       if (currentImage === images.length - 1) {
//         setCurrentImage(0);
//       } else {
//         setCurrentImage(currentImage + 1);
//       }
//     },
//     rightHandler: () => {
//       if (currentImage === images.length - 1) {
//         setCurrentImage(0);
//       } else {
//         setCurrentImage(currentImage + 1);
//       }
//     },
//   },

//   slide: {
//     leftHandler: () => {
//       if (currentImage === images.length - 1) {
//         setCurrentImage(0);
//       } else {
//         setCurrentImage(currentImage + 1);
//       }
//     },
//     rightHandler: () => {
//       if (currentImage === images.length - 1) {
//         setCurrentImage(0);
//       } else {
//         setCurrentImage(currentImage + 1);
//       }
//     },
//   },

//   fade: {
//     leftHandler: () => {
//       if (currentImage === 0) {
//         setCurrentImage(images.length - 1);
//       } else {
//         setCurrentImage(currentImage - 1);
//       }
//     },
//     rightHandler: () => {
//       if (currentImage === images.length - 1) {
//         setCurrentImage(0);
//       } else {
//         setCurrentImage(currentImage + 1);
//       }
//     },
//   },
// };
