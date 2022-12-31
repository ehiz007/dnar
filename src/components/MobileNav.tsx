import { useState } from "react";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Menu, Equalizer } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
    <Paper
      sx={{
        position: "fixed",
        display: { md: "none" },
        bottom: 0,
        left: 0,
        right: 0,
        background: "#171520",
      }}
      elevation={3}
    >
      <BottomNavigation
        sx={{ background: "none" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          newValue === 0 ? navigate("/") : navigate("/coins");
        }}
      >
        <BottomNavigationAction
          sx={{ color: "white" }}
          // label="home"
          icon={<Menu sx={{ color: value === 0 ? "#416AFF" : "white" }} />}
        />
        <BottomNavigationAction
          // label="coins"
          icon={<Equalizer sx={{ color: value !== 0 ? "#416AFF" : "white" }} />}
        />
      </BottomNavigation>
    </Paper>
  );
}
