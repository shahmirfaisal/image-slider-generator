import {
  ArrowCircleRight,
  ArrowCircleLeft,
  ArrowBackIos,
  ArrowForwardIos,
  ArrowBack,
  ArrowForward,
} from "@mui/icons-material";

export const Arrows = ({
  arrowsType,
  arrowsSize,
  arrowsOffset,
  arrowsBackground,
  arrowsColor,
  arrowsBackgroundVisibility,
  leftHandler,
  rightHandler,
}) => {
  console.log(arrowsColor);

  const arrowsIcons = {
    arrow: {
      left: (
        <ArrowBack
          onClick={leftHandler}
          sx={{
            fontSize: arrowsSize,
            mx: arrowsOffset,
            cursor: "pointer",
            color: arrowsColor,
          }}
        />
      ),
      right: (
        <ArrowForward
          onClick={rightHandler}
          sx={{
            fontSize: arrowsSize,
            mx: arrowsOffset,
            cursor: "pointer",
            color: arrowsColor,
          }}
        />
      ),
    },
    "arrow-circle": {
      left: (
        <ArrowCircleLeft
          onClick={leftHandler}
          sx={{
            fontSize: arrowsSize,
            mx: arrowsOffset,
            cursor: "pointer",
            color: arrowsColor,
          }}
        />
      ),
      right: (
        <ArrowCircleRight
          onClick={rightHandler}
          sx={{
            fontSize: arrowsSize,
            mx: arrowsOffset,
            cursor: "pointer",
            color: arrowsColor,
          }}
        />
      ),
    },
    "arrow-ios": {
      left: (
        <ArrowBackIos
          onClick={leftHandler}
          sx={{
            fontSize: arrowsSize,
            mx: arrowsOffset,
            cursor: "pointer",
            color: arrowsColor,
          }}
        />
      ),
      right: (
        <ArrowForwardIos
          onClick={rightHandler}
          sx={{
            fontSize: arrowsSize,
            mx: arrowsOffset,
            cursor: "pointer",
            color: arrowsColor,
          }}
        />
      ),
    },
  };

  return (
    <>
      {arrowsType !== "none" && (
        <div className="buttons">
          <div className="leftButtonContainer">
            {arrowsIcons[arrowsType].left}
          </div>
          <div className="rightButtonContainer">
            {arrowsIcons[arrowsType].right}
          </div>
        </div>
      )}

      <style jsx>{`
        .leftButtonContainer {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          height: 100%;
          background-color: rgba(
            0,
            0,
            0,
            ${arrowsBackground === "visible"
              ? arrowsBackgroundVisibility / 1000
              : 0}
          );
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rightButtonContainer {
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          height: 100%;
          background-color: rgba(
            0,
            0,
            0,
            ${arrowsBackground === "visible"
              ? arrowsBackgroundVisibility / 1000
              : 0}
          );
          display: flex;
          align-items: center;
        }
      `}</style>
    </>
  );
};
