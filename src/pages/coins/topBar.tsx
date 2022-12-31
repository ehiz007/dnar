import * as React from "react";
// import dayjs, { Dayjs } from "dayjs";
import { Box, Grid, Paper, IconButton } from "@mui/material/";
import { Search as SearchIcon } from "@mui/icons-material";
import InputBase from "@mui/material/InputBase";
import { grey } from "@mui/material/colors";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

export default function TopBar() {
  // const [value, setValue] = React.useState<Dayjs | null>(null);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: "space-between",
      }}
    >
      <Paper
        component="form"
        sx={{
          mb: 1,
          flex: 1,
          mr: 5,
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
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

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "#fff",
          border: "0.5px solid",
          borderRadius: "10px",
          borderColor: grey[800],
          mb: 1,
          width: "250px",
        }}
      >
        <Space direction="vertical" size={10}>
          <RangePicker format={"MMM YYYY"} bordered={false} picker="month" />
        </Space>
      </Box>
    </Grid>
  );
}
