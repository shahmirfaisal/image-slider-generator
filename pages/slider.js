import { Slider } from "../components/Slider/";
import { useRouter } from "next/router";

const ImageSlider = () => {
  const { query } = useRouter();

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
        />
      </div>
    </>
  );
};

export default ImageSlider;
