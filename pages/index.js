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
  Slider as MaterialSlider,
  Input,
  Paper,
  Divider,
  CircularProgress,
} from "@mui/material";
import { Slider } from "../components/Slider/";
import { useState, useRef } from "react";
import classes from "../styles/home.module.css";
import { Code } from "../components/Code/";
import Head from "next/head";
import {
  ArrowCircleRight,
  ArrowCircleLeft,
  ArrowForwardIos,
  ArrowBackIos,
  ArrowBack,
  ArrowForward,
  Clear,
} from "@mui/icons-material";

const Home = () => {
  const [animationType, setAnimationType] = useState("simple");
  const [autoPlay, setAutoPlay] = useState(false);
  const [radioButtonType, setRadioButtonType] = useState("square");
  const [arrowsType, setArrowsType] = useState("arrow-circle");
  const [arrowsBackground, setArrowsBackground] = useState("visible");
  const [arrowsBackgroundVisibility, setArrowsBackgroundVisibility] =
    useState(212);
  const [arrowsSize, setArrowsSize] = useState(50);
  const [arrowsOffset, setArrowsOffset] = useState(1);
  const [arrowsColor, setArrowsColor] = useState("#000000");
  const [radioButtonSize, setRadioButtonSize] = useState(20);
  const [radioButtonGap, setRadioButtonGap] = useState(10);
  const [code, setCode] = useState(null);
  const [images, setImages] = useState([
    {
      id: "1",
      src: "https://res.cloudinary.com/dw3ap99ie/image/upload/v1600752716/j0ayzanbjujdckneszea.webp",
    },
    {
      id: "2",
      src: "https://res.cloudinary.com/dw3ap99ie/image/upload/v1602743807/jeisg3zmejgosog8hrjs.png",
    },
    {
      id: "3",
      src: "https://res.cloudinary.com/dw3ap99ie/image/upload/v1634044956/zwyxnnuksvd0pebn494o.jpg",
    },
  ]);
  const [uploadingImage, setUploadingImage] = useState(false);
  const inputRef = useRef();

  const changeAnimationType = (event) => {
    setAnimationType(event.target.value);
  };

  const changeAutoPlay = (event) => {
    setAutoPlay(event.target.value === "true");
  };

  const changeRadioButtonType = (event) => {
    setRadioButtonType(event.target.value);
  };

  const changeArrowsType = (event) => {
    setArrowsType(event.target.value);
  };

  const changeArrowsBackground = (event) => {
    setArrowsBackground(event.target.value);
  };

  const changeArrowsBackgroundVisibility = (event, newValue) => {
    setArrowsBackgroundVisibility(newValue);
  };

  const changeArrowsSize = (event, newValue) => {
    setArrowsSize(newValue);
  };

  const changeArrowsOffset = (event, newValue) => {
    setArrowsOffset(newValue);
  };

  const changeArrowsColor = (e) => {
    setArrowsColor(e.target.value);
  };

  const changeRadioButtonSize = (event, newValue) => {
    setRadioButtonSize(newValue);
  };

  const changeRadioButtonGap = (event, newValue) => {
    setRadioButtonGap(newValue);
  };

  const uploadImageHandler = async (e) => {
    setUploadingImage(true);

    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "Ecommerce Images");

    const res = await fetch(process.env.NEXT_PUBLIC_CLOUDINARY_URL, {
      method: "POST",
      body: formData,
    });
    const data = await res.json();

    setUploadingImage(false);
    setImages([{ id: data.asset_id, src: data.secure_url }, ...images]);

    inputRef.current.value = "";
  };

  const removeImageHandler = (id) => {
    setImages(images.filter((img) => img.id !== id));
  };

  const generateCodeHandler = () => {
    let link = `${process.env.NEXT_PUBLIC_SITE_URL}/slider`;
    let query = "?";
    images.forEach((img) => {
      query += `image=${img.src}&`;
    });
    query += `animationType=${animationType}&`;
    query += `autoPlay=${autoPlay}&`;
    query += `radioButtonType=${radioButtonType}&`;
    query += `radioButtonSize=${radioButtonSize}&`;
    query += `radioButtonGap=${radioButtonGap}&`;
    query += `arrowsType=${arrowsType}&`;
    query += `arrowsBackground=${arrowsBackground}&`;
    query += `arrowsBackgroundVisibility=${arrowsBackgroundVisibility}&`;
    query += `arrowsSize=${arrowsSize}&`;
    query += `arrowsOffset=${arrowsOffset}&`;
    query += `arrowsColor=${arrowsColor}`;

    link += query;
    setCode(`<iframe src="${link}" style="border: none;"></iframe>`);
  };

  return (
    <Container maxWidth="md" sx={{ mb: 5 }}>
      <Head>
        <title>
          Image Slider Generator - Quickly Create and Customize Image Sliders
        </title>
        <meta
          name="description"
          content="Instantly create and customize image sliders and use them in your projects"
        />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_SITE_URL}
          key="ogurl"
        />
        {/* <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_SITE_URL}${image}`}
          key="ogimage"
        /> */}
        <meta
          property="og:site_name"
          content={process.env.NEXT_PUBLIC_SITE_NAME}
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="Image Slider Generator - Quickly Create and Customize Image Sliders"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Instantly create and customize image sliders and use them in your projects"
          key="ogdesc"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@codewithshahmir" />
      </Head>

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
          images={images.map((img) => img.src)}
          animationType={animationType}
          autoPlay={autoPlay}
          radioButtonType={radioButtonType}
          arrowsType={arrowsType}
          arrowsBackground={arrowsBackground}
          arrowsBackgroundVisibility={arrowsBackgroundVisibility}
          arrowsSize={arrowsSize}
          arrowsOffset={arrowsOffset}
          arrowsColor={arrowsColor}
          radioButtonSize={radioButtonSize}
          radioButtonGap={radioButtonGap}
        />
      </Box>

      <Box component="section" sx={{ mb: 8 }}>
        <Typography component="h2" variant="h4" className="heading">
          Upload Your Images
        </Typography>
        <Button
          component="label"
          variant="contained"
          color="primary"
          htmlFor="image"
          disabled={uploadingImage}
          sx={{ mt: 3 }}
        >
          Upload Image{" "}
          {uploadingImage && <CircularProgress size={25} color="primary" />}
        </Button>
        <input
          type="file"
          accept="image/*"
          id="image"
          hidden
          onChange={uploadImageHandler}
          ref={inputRef}
        />

        <Paper
          component="section"
          className={classes.sliderImages}
          sx={{ p: 2 }}
          elevation={2}
        >
          {!images.length && (
            <Typography>
              No Images. Click on 'UPLOAD IMAGE' to upload the images.
            </Typography>
          )}
          <div>
            {images.map((image) => (
              <div key={image.id}>
                <img src={image.src} alt="Slider Image" />
                <Clear
                  fontSize="small"
                  onClick={removeImageHandler.bind(this, image.id)}
                />
              </div>
            ))}
          </div>
        </Paper>
      </Box>

      <Box component="section" sx={{ mt: 3, mb: 3 }}>
        <Typography
          component="h2"
          variant="h4"
          className="heading"
          sx={{ mb: 2 }}
        >
          Adjust Slider
        </Typography>

        <Paper
          elevation={2}
          className={classes.settingsPaper}
          component="section"
        >
          <Typography
            component="h3"
            variant="h5"
            className="heading"
            sx={{ mb: 3 }}
          >
            Animation Settings
          </Typography>

          <div>
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
                <FormControlLabel
                  value="fade"
                  control={<Radio />}
                  label="Fade"
                />
              </RadioGroup>
            </FormControl>

            <FormControl>
              <FormLabel>Auto Play</FormLabel>
              <RadioGroup value={autoPlay} onChange={changeAutoPlay}>
                <FormControlLabel value={true} control={<Radio />} label="ON" />
                <FormControlLabel
                  value={false}
                  control={<Radio />}
                  label="OFF"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </Paper>

        <Paper
          elevation={2}
          className={classes.settingsPaper}
          component="section"
        >
          <Typography
            component="h3"
            variant="h5"
            className="heading"
            sx={{ mb: 3 }}
          >
            Arrows Settings
          </Typography>

          <div>
            <FormControl>
              <FormLabel>Arrows</FormLabel>
              <RadioGroup value={arrowsType} onChange={changeArrowsType}>
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
                <FormControlLabel
                  value="none"
                  control={<Radio />}
                  label="None"
                />
              </RadioGroup>
            </FormControl>

            <FormControl>
              <FormLabel>Arrows Background</FormLabel>
              <RadioGroup
                value={arrowsBackground}
                onChange={changeArrowsBackground}
              >
                <FormControlLabel
                  value="visible"
                  control={<Radio />}
                  label="Visible"
                />
                <FormControlLabel
                  value="hidden"
                  control={<Radio />}
                  label="hidden"
                />
              </RadioGroup>
            </FormControl>

            <FormControl>
              <FormLabel>Arrows Background Visibility</FormLabel>
              <MaterialSlider
                value={arrowsBackgroundVisibility}
                onChange={changeArrowsBackgroundVisibility}
                min={0}
                max={1000}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Arrows Size</FormLabel>
              <MaterialSlider
                value={arrowsSize}
                onChange={changeArrowsSize}
                min={0}
                max={100}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Arrows Offset</FormLabel>
              <MaterialSlider
                value={arrowsOffset}
                onChange={changeArrowsOffset}
                min={0}
                max={10}
                step={1}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Arrows Color</FormLabel>
              <input
                type="color"
                value={arrowsColor}
                onChange={changeArrowsColor}
              />
            </FormControl>
          </div>
        </Paper>

        <Paper
          elevation={2}
          className={classes.settingsPaper}
          component="section"
        >
          <Typography
            component="h3"
            variant="h5"
            className="heading"
            sx={{ mb: 3 }}
          >
            Radio Buttons Settings
          </Typography>

          <div>
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
                <FormControlLabel
                  value="none"
                  control={<Radio />}
                  label="None"
                />
              </RadioGroup>
            </FormControl>

            <FormControl>
              <FormLabel>Radio Button Size</FormLabel>
              <MaterialSlider
                value={radioButtonSize}
                onChange={changeRadioButtonSize}
                min={5}
                max={100}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Radio Buttons Gap</FormLabel>
              <MaterialSlider
                value={radioButtonGap}
                onChange={changeRadioButtonGap}
                min={5}
                max={100}
              />
            </FormControl>
          </div>
        </Paper>
      </Box>

      <Divider sx={{ mb: 6, mt: 3 }} />

      <Button
        variant="contained"
        color="primary"
        disabled={!images.length}
        onClick={generateCodeHandler}
      >
        Get Code
      </Button>

      {code && <Code code={code} />}
    </Container>
  );
};

export default Home;
