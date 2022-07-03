import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, Button, Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const Code = ({ code }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    const textarea = document.createElement("textarea");
    textarea.value = code;

    textarea.style.top = "0";
    textarea.style.left = "0";
    textarea.style.position = "fixed";

    document.body.appendChild(textarea);

    textarea.focus();
    textarea.select();

    document.execCommand("copy");

    document.body.removeChild(textarea);

    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <Box component="section">
      <ContentCopyIcon
        onClick={handleClick}
        sx={{ display: "block", ml: "auto", cursor: "pointer" }}
      />

      <SyntaxHighlighter language="html" style={dracula} wrapLongLines>
        {code}
      </SyntaxHighlighter>

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Code Copied!"
        action={action}
      />
    </Box>
  );
};
