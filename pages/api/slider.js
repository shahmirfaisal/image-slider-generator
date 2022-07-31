export default (req, res) => {
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
  } = req.body;

  if (req.method === "POST") {
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

    res.status(200).json(link);
  } else {
    res.status(400).json("Invalid Method!");
  }
};
