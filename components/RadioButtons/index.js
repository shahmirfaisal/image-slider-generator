export const RadioButtons = ({
  radioButtonType,
  images,
  changeRadioImage,
  currentImage,
  radioButtonSize,
  radioButtonGap,
}) => {
  return (
    <>
      {radioButtonType !== "none" && (
        <div className="radioButtons">
          {images.map((img, i) => (
            <div
              key={i}
              className={[
                "radioButton",
                radioButtonType,
                currentImage === i ? "activeRadioButton" : null,
              ].join(" ")}
              onClick={() => changeRadioImage(i)}
            >
              <img src={img} className="img" />
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        .radioButtons {
          display: flex;
          justify-content: center;
          position: absolute;
          bottom: 3%;
          left: 50%;
          transform: translateX(-50%);
        }

        .radioButton {
          width: ${radioButtonSize}px;
          height: ${radioButtonSize}px;
          cursor: pointer;
          box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
          border: 2px solid transparent;
          overflow: hidden;
        }
        .radioButton.circle {
          border-radius: 50%;
        }
        .radioButton.square {
        }
        .radioButton:not(:last-child) {
          margin-right: ${radioButtonGap}px;
        }
        .activeRadioButton {
          border-color: white;
        }
        .img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      `}</style>
    </>
  );
};
