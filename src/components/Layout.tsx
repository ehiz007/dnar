import React, { useEffect, PropsWithChildren } from "react";
import NavBar from "./NavBar";
import { Grid, Container } from "@mui/material";
import { grey } from "@mui/material/colors";
import { getCoinsData } from "../hooks/requests";
import { setCoins } from "../store/coinSlice";
import { useAppDispatch } from "../hooks";
import MobileNav from "./MobileNav";

export default function Layout(props: PropsWithChildren) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    getCoinsData().then((res: any) => {
      dispatch(setCoins(res));
    });
  });
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundColor: "#171520",
        color: grey[400],
        display: "flex",
        minHeight: "100vh",
        overflow: "auto",
        "&::-webkit-scrollbar": {
          width: 0,
        },
        scrollbarWidth: "none",
        "&-ms-overflow-style": "none",
        p: 3,
      }}
    >
      <Grid sx={{ mb: { xs: 5, md: 0 } }} container spacing={3} columns={12}>
        <Grid item sx={{ position: "relative" }}>
          <NavBar />
        </Grid>
        <Grid item xs={12} md={10}>
          {props.children}
        </Grid>
      </Grid>
      <MobileNav />
    </Container>
  );
}
