import {
  AppBar,
  Toolbar,
  Typography,
  Link as MuiLink,
  Box,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArticleIcon from "@mui/icons-material/Article";
import HomeIcon from "@mui/icons-material/Home";

export const Header = () => {
  const { pathname } = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="relative">
      <Toolbar
        sx={{
          justifyContent: "space-between",
          py: 2,
          "& a": {
            color: "inherit",
            display: "flex",
            alignItems: "center",
            "& svg": {
              mr: 0.5,
            },
            "&:hover": { textDecoration: "underline" },
          },
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          align="center"
          className="heading"
        >
          <Link href="/" passHref>
            <MuiLink title="Home Page" underline="none">
              Image Slider Generator
            </MuiLink>
          </Link>
        </Typography>

        <Hidden mdUp>
          <IconButton onClick={handleClick}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
        </Hidden>

        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{
            "& a": {
              display: "flex",
              alignItems: "center",
              "& svg": { mr: 0.5 },
            },
          }}
        >
          <Link href="/" passHref>
            <MuiLink title="Home Page" underline="none">
              <MenuItem onClick={handleClose}>
                <HomeIcon /> Home
              </MenuItem>
            </MuiLink>
          </Link>

          <Link href="/documentation" passHref>
            <MuiLink title="API Documentation" underline="none">
              <MenuItem onClick={handleClose}>
                <ArticleIcon /> API Docs
              </MenuItem>
            </MuiLink>
          </Link>

          <MuiLink
            title="Github Repository"
            underline="none"
            href="https://github.com/shahmirfaisal/image-slider-generator"
            target="_blank"
          >
            <MenuItem onClick={handleClose}>
              <GitHubIcon /> Github
            </MenuItem>
          </MuiLink>
        </Menu>

        <Hidden mdDown>
          <Box display="flex" alignItems="center">
            <Link href="/" passHref>
              <MuiLink
                title="Home Page"
                sx={{ textDecoration: pathname === "/" ? "underline" : "none" }}
              >
                <HomeIcon /> Home
              </MuiLink>
            </Link>

            <Link href="/documentation" passHref>
              <MuiLink
                title="API Documentation"
                sx={{
                  ml: 4,
                  textDecoration:
                    pathname === "/documentation" ? "underline" : "none",
                }}
              >
                <ArticleIcon /> API Docs
              </MuiLink>
            </Link>

            <MuiLink
              title="Github Repository"
              href="https://github.com/shahmirfaisal/image-slider-generator"
              target="_blank"
              sx={{ ml: 4 }}
            >
              <GitHubIcon /> Github
            </MuiLink>
          </Box>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
