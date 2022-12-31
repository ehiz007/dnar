import React from "react";
import { Box, Grid, Paper, Typography, Skeleton } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import { LinkIcon } from "../../components/icons";
import { coin } from "../../hooks";
import Sparkline from "./sparkline";
interface CoinProps {
  coins: coin[];
}

const mainSection: React.FC<CoinProps> = ({ coins }) => {
  return (
    <Grid container columns={12} spacing={3} sx={{ my: 2 }}>
      <Grid item xs={12} md={9}>
        <Paper
          sx={{
            backgroundColor: "#251F2B",
            alignItems: "center",
            p: 3,
            color: "#fff",
            borderRadius: 3,
            mb: 4,
          }}
        >
          <Typography variant="h4" sx={{ mb: 3 }}>
            Market leaders
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "200px",
              overflow: "auto",
              "&::-webkit-scrollbar": {
                width: 0,
              },
              scrollbarWidth: "none",
              "&-ms-overflow-style": "none",
            }}
          >
            {coins.length < 1 ? (
              <Skeleton animation="wave" variant="rounded" height="100%" />
            ) : (
              coins.slice(0, 20).map((coin: coin, index: any) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "#7D2FF5",
                    px: 2,
                    borderRadius: 3,
                    my: 1.5,
                    width: { xs: "100vw", sm: "100%" },
                    // minWidth: "100vw",
                  }}
                  // fullWidth
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "10%",
                      height: 20,
                      left: -3,
                      borderRight: `5px solid ${grey[300]}`,
                    }}
                  />
                  <Box sx={{ display: "inline-flex", flexWrap: "wrap" }}>
                    <Typography>{coin.name}</Typography>
                    <Typography sx={{ ml: 0.5, textTransform: "uppercase" }}>
                      ({coin.symbol})
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Sparkline data={coin.sparkline} width={150} height={70} />
                  </Box>
                  <Typography
                    sx={{
                      mx: { xs: 1.3, sm: 0 },
                      color: `${
                        coin.price_change_24h > 0 ? green[500] : "red"
                      }`,
                    }}
                    variant="caption"
                  >
                    {new Intl.NumberFormat("en", {
                      style: "currency",
                      currency: "USD",
                    }).format(coin.price_change_24h)}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: 20, md: 30 },
                      mr: { xs: 0.5, sm: 0 },
                    }}
                  >
                    {new Intl.NumberFormat("en", {
                      style: "currency",
                      currency: "USD",
                    }).format(coin.current_price)}
                  </Typography>
                </Box>
              ))
            )}
          </Box>
        </Paper>
        <Paper
          sx={{
            backgroundColor: "#251F2B",
            alignItems: "center",
            p: 3,
            color: "#fff",
            borderRadius: 3,
            mb: 4,
          }}
        >
          <Typography variant="h4" sx={{ mb: 3 }}>
            All Coins
          </Typography>

          <Grid
            sx={{
              height: "150px",
              overflow: "auto",
              "&::-webkit-scrollbar": {
                width: 0,
              },
              scrollbarWidth: "none",
              "&-ms-overflow-style": "none",
            }}
            container
            spacing={3}
            // columns={16}
            // rows={2}
          >
            {coins.length < 1 ? (
              <Skeleton
                sx={{ ml: 2 }}
                animation="wave"
                variant="rounded"
                height="100%"
              />
            ) : (
              coins.map((i, index) => (
                <Grid key={index} item>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#7D2FF5",
                      p: 2,
                      borderRadius: 3,
                    }}
                  >
                    <Typography>
                      {i.name} ({i.symbol})
                    </Typography>
                  </Box>
                </Grid>
              ))
            )}
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper
          sx={{
            backgroundColor: "#251F2B",
            // alignItems: "center",
            p: 3,
            color: "#fff",
            borderRadius: 3,
          }}
        >
          <Box sx={{ position: "static", mb: 3 }}>
            <Typography variant="body1">Events</Typography>
          </Box>
          <Box
            sx={{
              height: "70vh",
              overflow: "auto",
              position: "relative",
              "&::-webkit-scrollbar": {
                width: 0,
              },
              scrollbarWidth: "none",
              "&-ms-overflow-style": "none",
            }}
          >
            <Grid container spacing={3} columns={16}>
              {[1, 2, 3, 4].map((i) => (
                <Grid key={i} item>
                  <Box
                    sx={{
                      backgroundColor: "#7D2FF5",
                      p: 2,
                      borderRadius: 3,
                    }}
                  >
                    <Typography variant="body2" sx={{ fontSize: 14 }}>
                      TOKEN2049 London
                    </Typography>
                    <Typography variant="caption">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Ad praesentium labore earum
                    </Typography>
                    <div>
                      <Box sx={{ display: "flex", justifyContent: "end" }}>
                        <Box
                          sx={{
                            p: 0.7,
                            backgroundColor: "#0E1B1A",
                            display: "inline-flex",
                            borderRadius: 3,
                          }}
                        >
                          <LinkIcon sx={{ color: "#416AFF" }} />
                        </Box>
                      </Box>
                    </div>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default mainSection;
