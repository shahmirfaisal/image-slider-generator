import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Slider } from "../components/Slider/";
import { useState } from "react";
import classes from "../styles/home.module.css";
import { Code } from "../components/Code/";
import {
  ArrowCircleRight,
  ArrowCircleLeft,
  ArrowForwardIos,
  ArrowBackIos,
  ArrowBack,
  ArrowForward,
} from "@mui/icons-material";

const images = [
  "https://res.cloudinary.com/dw3ap99ie/image/upload/v1600752716/j0ayzanbjujdckneszea.webp",
  "https://res.cloudinary.com/dw3ap99ie/image/upload/v1602743807/jeisg3zmejgosog8hrjs.png",
  "https://res.cloudinary.com/dw3ap99ie/image/upload/v1634044956/zwyxnnuksvd0pebn494o.jpg",
];

const Home = () => {
  const [animationType, setAnimationType] = useState("simple");
  const [autoPlay, setAutoPlay] = useState(false);
  const [radioButtonType, setRadioButtonType] = useState("square");
  const [forwardBackwardType, setForwardBackwardType] =
    useState("arrow-circle");
  const [code, setCode] = useState(null);

  const changeAnimationType = (event) => {
    setAnimationType(event.target.value);
  };

  const changeAutoPlay = (event) => {
    setAutoPlay(event.target.value === "true");
  };

  const changeRadioButtonType = (event) => {
    setRadioButtonType(event.target.value);
  };

  const changeForwardBackwardType = (event) => {
    setForwardBackwardType(event.target.value);
  };

  const generateCodeHandler = () => {
    let link = "http://localhost:3000/slider";
    let query = "?";
    images.forEach((img) => {
      query += `image=${img}&`;
    });
    query += `animationType=${animationType}&`;
    query += `autoPlay=${autoPlay}&`;
    query += `radioButtonType=${radioButtonType}`;
    link += query;
    setCode(`<iframe src="${link}" style="border: none;"></iframe>`);
  };

  return (
    <Container maxWidth="md" sx={{ mb: 5 }}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        sx={{ mt: 2, mb: 2 }}
        className="heading"
      >
        Image Slider Generator
      </Typography>

      <Box component="section" sx={{ width: "100%", height: "400px", my: 5 }}>
        <Slider
          images={images}
          animationType={animationType}
          autoPlay={autoPlay}
          radioButtonType={radioButtonType}
          forwardBackwardType={forwardBackwardType}
        />
      </Box>

      <Box component="section" sx={{ mt: 3, mb: 3 }}>
        <Typography component="h2" variant="h4" className="heading">
          Adjust Slider
        </Typography>

        <div className={classes.sliderSettings}>
          <FormControl>
            <FormLabel>Animation Type</FormLabel>
            <RadioGroup value={animationType} onChange={changeAnimationType}>
              <FormControlLabel
                value="simple"
                control={<Radio />}
                label="Simple"
              />
              <FormControlLabel
                value="slide"
                control={<Radio />}
                label="Slide"
              />
              <FormControlLabel value="fade" control={<Radio />} label="Fade" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Auto Play</FormLabel>
            <RadioGroup value={autoPlay} onChange={changeAutoPlay}>
              <FormControlLabel value={true} control={<Radio />} label="ON" />
              <FormControlLabel value={false} control={<Radio />} label="OFF" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Radio Button</FormLabel>
            <RadioGroup
              value={radioButtonType}
              onChange={changeRadioButtonType}
            >
              <FormControlLabel
                value="square"
                control={<Radio />}
                label="Square"
              />
              <FormControlLabel
                value="circle"
                control={<Radio />}
                label="Circle"
              />
              <FormControlLabel value="none" control={<Radio />} label="None" />
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Forward/Backward Buttons</FormLabel>
            <RadioGroup
              value={forwardBackwardType}
              onChange={changeForwardBackwardType}
            >
              <FormControlLabel
                value="arrow-circle"
                control={<Radio />}
                label={
                  <>
                    <ArrowCircleLeft />
                    <ArrowCircleRight />
                  </>
                }
              />
              <FormControlLabel
                value="arrow-ios"
                control={<Radio />}
                label={
                  <>
                    <ArrowBackIos />
                    <ArrowForwardIos />
                  </>
                }
              />
              <FormControlLabel
                value="arrow"
                control={<Radio />}
                label={
                  <>
                    <ArrowBack />
                    <ArrowForward />
                  </>
                }
              />
              <FormControlLabel value="none" control={<Radio />} label="None" />
            </RadioGroup>
          </FormControl>
        </div>
      </Box>

      <Button variant="contained" color="primary" onClick={generateCodeHandler}>
        Get Code
      </Button>

      {code && <Code code={code} />}
    </Container>
  );
};

export default Home;
