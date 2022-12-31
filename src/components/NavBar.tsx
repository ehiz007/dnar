import React from "react";
import { Paper, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import {
  DragHandle as DragHandleIcon,
  Menu,
  Equalizer,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

export default function NavBar() {
  let navigate = useNavigate();
  let location = useLocation();

  return (
    <Box
      sx={{
        flexDirection: "column",
        position: "relative",
        display: { xs: "none", md: "flex" },
      }}
    >
      <Paper
        sx={{
          width: "60%",
          backgroundColor: "#251F2B",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: 1,
          color: grey[100],
          mb: 5,
        }}
      >
        <IconButton>
          <DragHandleIcon fontSize="large" sx={{ color: "#416AFF" }} />
        </IconButton>
      </Paper>
      <Paper
        sx={{
          width: "60%",
          backgroundColor: "#251F2B",
          justifyContent: "center",
          p: 1,
          color: grey[100],
          height: "80vh",
        }}
      >
        <IconButton
          sx={{
            backgroundColor: location.pathname !== "/" ? "none" : "#416AFF",
            "&:hover": {
              backgroundColor: location.pathname !== "/" ? "none" : "#416AFF",
            },
            p: 1,
            borderRadius: 3,
            mb: 1,
          }}
          onClick={() => navigate("/")}
        >
          <Menu
            sx={{
              color: "#fff",
            }}
          />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: location.pathname === "/" ? "none" : "#416AFF",
            "&:hover": {
              backgroundColor: location.pathname === "/" ? "none" : "#416AFF",
            },
            p: 1,
            borderRadius: 3,
          }}
          onClick={() => navigate("/coins")}
        >
          <Equalizer
            sx={{
              color: "#fff",
            }}
          />
        </IconButton>
      </Paper>
    </Box>
  );
}
