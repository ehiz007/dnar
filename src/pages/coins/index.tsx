import React, { useEffect, useState } from "react";
import { Fade, Grid, Typography, Stack, Box } from "@mui/material/";
import TopBar from "./topBar";
import Chart from "../../components/Chart";
import Exchange from "./exchange";
import RightBar from "./rightBar";
import { getCryptoDescription } from "../../hooks/requests";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setCoinDetails } from "../../store/coinSlice";

export default function Coin() {
  const [coin, setCoin] = useState<string>("bitcoin");
  let dispatch = useAppDispatch();
  const coinData = useAppSelector(({ crypto }) => crypto.getCoin);

  useEffect((): any => {
    getCryptoDescription(coin)
      .then((coinDetails) => {
        dispatch(setCoinDetails(coinDetails));
      })
      .catch((e) => console.log(e));
    return () => null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coin]);

  return (
    <>
      <Fade in={true}>
        <Grid container spacing={4} columns={12}>
          <Grid item xs={12} lg={9}>
            <TopBar />
            <Chart />
            <Grid
              container
              columns={16}
              spacing={2}
              sx={{ my: 0.5, alignItems: "end" }}
            >
              {/* Make payment section */}

              <Exchange setCoin={setCoin} />
              <Grid item xs={8} sm={4}>
                <Stack
                  sx={{
                    backgroundColor: "#251F2B",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 3,
                    color: "#fff",
                    borderRadius: 3,
                    position: "relative",
                  }}
                >
                  <Typography>Alexa Rank</Typography>
                  <Typography>9440</Typography>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "10%",
                      height: 30,
                      left: -2,
                      borderRight: "4px solid #416AFF",
                    }}
                  />
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={3}>
            <RightBar data={coinData} />
          </Grid>
        </Grid>
      </Fade>
    </>
  );
}
