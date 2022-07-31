import { Box, Container, Grid, Link, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box component="footer" backgroundColor="#454545" color="white" py={4}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography
              sx={{
                fontSize: "1.1rem",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              Developed by{" "}
              <Link
                title="Owner"
                href="https://portfolio.shahmir.me/"
                target="_blank"
              >
                Shahmir Faisal
              </Link>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              sx={{
                fontSize: "1.1rem",
                textAlign: { xs: "center", sm: "right" },
              }}
            >
              Give a{" "}
              <Typography
                component="span"
                color="primary"
                sx={{ fontSize: "1.2rem" }}
              >
                &hearts;
              </Typography>{" "}
              on{" "}
              <Link
                title="Owner"
                href="https://github.com/shahmirfaisal/image-slider-generator"
                target="_blank"
              >
                Github
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
