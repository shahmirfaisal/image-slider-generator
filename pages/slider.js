import { Slider } from "../components/Slider/";
import { useRouter } from "next/router";

const ImageSlider = () => {
  const { query } = useRouter();

  if (!query.image) return null;

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <Slider
          images={query.image}
          animationType={query.animationType}
          autoPlay={query.autoPlay === "true"}
          radioButtonType={query.radioButtonType}
          arrowsType={query.arrowsType}
          arrowsBackground={query.arrowsBackground}
          arrowsBackgroundVisibility={query.arrowsBackgroundVisibility}
          arrowsSize={query.arrowsSize}
          arrowsOffset={query.arrowsOffset}
          arrowsColor={query.arrowsColor}
          radioButtonSize={query.radioButtonSize}
          radioButtonGap={query.radioButtonGap}
        />
      </div>
    </>
  );
};

export default ImageSlider;
