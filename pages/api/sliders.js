import NextCors from "nextjs-cors";

export default async (req, res) => {
  await NextCors(req, res);

  const sliderData = req.body;

  if (req.method === "POST") {
    const links = [];

    sliderData.forEach((data) => {
      const {
        images = [],

        options: {
          animationType = "simple",
          autoPlay = false,
          radioButtonType = "square",
          arrowsType = "arrow-circle",
          arrowsBackground = "visible",
          arrowsBackgroundVisibility = 212,
          arrowsSize = 50,
          arrowsOffset = 1,
          arrowsColor = "#000000",
          radioButtonSize = 20,
          radioButtonGap = 10,
        },
      } = data;

      let link = `${process.env.NEXT_PUBLIC_SITE_URL}/slider`;
      let query = "?";
      images.forEach((img) => {
        query += `image=${encodeURIComponent(img)}&`;
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
      links.push(link);
    });

    res.status(200).json(links);
  } else {
    res.status(400).json("Invalid Method!");
  }
};
