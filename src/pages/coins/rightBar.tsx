import React from "react";
import { Box, Grid, Typography, Stack, Divider, Skeleton } from "@mui/material";
import { WWWIcon } from "../../components/icons";
import RedditIcon from "@mui/icons-material/Reddit";
import GitHubIcon from "@mui/icons-material/GitHub";

interface CoinProps {
  data: any;
}
const RightBar: React.FC<CoinProps> = ({ data }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#251F2B",
        pt: 2,
        pl: 1,
        borderRadius: 3,
        z: 1,
        color: "white",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -20,
          z: 10,
          right: 15,
          p: 1,
          borderRadius: 3,
          color: "black",
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        {data.image.thumb ? (
          <img
            style={{
              color: "white",
              width: "40px",
              height: "40px",
              padding: 0.4,
              borderRadius: 50,
              transform: "rotate(12deg)",
            }}
            alt="img"
            src={data.image.small}
          />
        ) : (
          <Skeleton
            sx={{ width: "40px", height: "40px" }}
            variant="circular"
            animation="wave"
          />
        )}
      </Box>
      <Stack spacing={3}>
        <Typography sx={{ pl: 2 }}>Info Card</Typography>
        <Box
          sx={{
            py: 2,
            px: 3,
            backgroundColor: "#7D30F5",
            color: "white",
            borderRadius: 3,
          }}
        >
          <Typography variant="body2">Description:</Typography>
          <Typography variant="caption">
            {data.description ? (
              data.description.en.split(".")[0]
            ) : (
              <Skeleton animation={"wave"} />
            )}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            px: { xs: 3, sm: 2, lg: 0 },
          }}
        >
          <Box>
            <a
              href={data.links !== undefined ? data.links.homepage[0] : ""}
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              <Box
                sx={{
                  p: 1,
                  cursor: "pointer",
                  backgroundColor: "#0E1B1A",
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: 3,
                }}
              >
                <Typography variant="body2" sx={{ mr: 1, color: "white" }}>
                  Website
                </Typography>
                <WWWIcon sx={{ fontSize: 24, color: "#416AFF" }} />
              </Box>
            </a>
          </Box>
          <Box>
            <a
              href={data.links.announcement_url.subreddit_url}
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              <Box
                sx={{
                  p: 1,
                  cursor: "pointer",
                  backgroundColor: "#0E1B1A",
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: 3,
                }}
              >
                <RedditIcon
                  sx={{
                    color: "white",
                    borderRadius: "50%",
                    p: 0.2,
                    backgroundColor: "#FF3F18",
                  }}
                />
              </Box>
            </a>
          </Box>
          <Box>
            <a
              href={data.links.repos_url.github[0]}
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              <Box
                sx={{
                  p: 1,
                  cursor: "pointer",
                  backgroundColor: "#3F6EFF",
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: 3,
                }}
              >
                <GitHubIcon
                  sx={{
                    color: "black",
                  }}
                />
              </Box>
            </a>
          </Box>
        </Box>
        <Grid container sx={{ px: 2 }} direction="column">
          <Typography>Facts</Typography>
          <Stack spacing={3}>
            <Divider
              sx={{ backgroundColor: "#7D30F5", mt: 1 }}
              variant="middle"
              //   light={true}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2">Hashing Algorithm</Typography>
              <Typography variant="caption">
                {data.hashing_algorithm}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2">Country of Origin</Typography>
              <Typography variant="caption">
                {data.country_origin || "Unknown"}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2">Category</Typography>
              <Typography variant="caption">{data.categories[0]}</Typography>
            </Box>
          </Stack>
        </Grid>
        <Box sx={{ p: 2 }}>
          <Stack
            spacing={2}
            sx={{ backgroundColor: "#7D30F5", p: 2, borderRadius: 3 }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2">Total supply</Typography>
              <Typography variant="caption">
                {data.market_data.total_supply}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="body2">Max supply</Typography>
              <Typography variant="caption">
                {data.market_data.max_supply}
              </Typography>
            </Box>

            <Box
              sx={{ mb: 2, display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="body2">Circulating supply</Typography>
              <Typography variant="caption">
                {data.market_data.circulating_supply}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default RightBar;
