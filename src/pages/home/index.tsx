import React from "react";
import { Fade, Paper, IconButton } from "@mui/material/";
import { Search as SearchIcon } from "@mui/icons-material";
import InputBase from "@mui/material/InputBase";
import { grey } from "@mui/material/colors";
import Main from "./mainSection";
import { useAppSelector } from "../../hooks";

// import TopBar from "../coins/topBar";

const Home: React.FC = () => {
  const store = useAppSelector(({ crypto }) => crypto);
  return (
    <>
      <Fade in={true}>
        <div className="">
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: "80%",
              backgroundColor: "inherit",
              border: "0.5px solid",
              borderRadius: "10px",
              borderColor: grey[800],
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon sx={{ color: "#416AFF" }} />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1, color: grey[400] }}
              placeholder="Search"
              inputProps={{ "aria-label": "search coins" }}
            />
          </Paper>
          <Main coins={store.coins} />
        </div>
      </Fade>
    </>
  );
};

export default Home;
