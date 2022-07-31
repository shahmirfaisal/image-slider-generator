import {
  ArrowCircleRight,
  ArrowCircleLeft,
  ArrowBackIos,
  ArrowForwardIos,
  ArrowBack,
  ArrowForward,
} from "@mui/icons-material";
import { Box } from "@mui/material";

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
  const arrowsIcons = {
    arrow: {
      left: <ArrowBack onClick={leftHandler} />,
      right: <ArrowForward onClick={rightHandler} />,
    },
    "arrow-circle": {
      left: <ArrowCircleLeft onClick={leftHandler} />,
      right: <ArrowCircleRight onClick={rightHandler} />,
    },
    "arrow-ios": {
      left: <ArrowBackIos onClick={leftHandler} />,
      right: <ArrowForwardIos onClick={rightHandler} />,
    },
  };

  return (
    <>
      {arrowsType !== "none" && (
        <div className="buttons">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
            sx={{
              transform: "translateY(-50%)",
              position: "absolute",
              top: "50%",
              backgroundColor: `rgba(
            0,
            0,
            0,
            ${
              arrowsBackground === "visible"
                ? arrowsBackgroundVisibility / 1000
                : 0
            }
          )`,

              "& > svg": {
                fontSize: `${+arrowsSize}px`,
                mx: arrowsOffset,
                cursor: "pointer",
                color: arrowsColor,
              },
            }}
          >
            {arrowsIcons[arrowsType].left}
          </Box>
          <Box
            position="absolute"
            height="100%"
            display="flex"
            alignItems="center"
            sx={{
              top: "50%",
              right: "0",
              transform: "translateY(-50%)",
              backgroundColor: `rgba(0,0,0,${
                arrowsBackground === "visible"
                  ? arrowsBackgroundVisibility / 1000
                  : 0
              })`,
              "& > svg": {
                fontSize: `${+arrowsSize}px`,
                mx: arrowsOffset,
                cursor: "pointer",
                color: arrowsColor,
              },
            }}
          >
            {arrowsIcons[arrowsType].right}
          </Box>
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
