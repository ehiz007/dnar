import React from "react";
import { Box, Stack, Grid, Typography } from "@mui/material/";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Arrow from "@mui/icons-material/ArrowRightAlt";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppSelector } from "../../hooks";

type Props = {
  setCoin: (coin: string) => void;
};
const Exchange: React.FC<Props> = ({ setCoin }) => {
  const { getCoin, coins } = useAppSelector(({ crypto }) => crypto);
  const [currency, setCurrency] = React.useState<string>("USD");
  const [coin, setCurrentCoin] = React.useState<string>("BTC");

  const handleChangeCurrency = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };

  const handleChangeCoin = (event: SelectChangeEvent) => {
    setCurrentCoin(event.target.value as string);
    let found: any = coins.find(
      (x) => x.symbol === event.target.value.toLowerCase()
    );
    let id = found.id.toLowerCase();
    setCoin(id);
  };
  return (
    <Grid item xs={16} sm={12}>
      <Stack
        spacing={2.5}
        sx={{
          position: "relative",
          backgroundColor: "#251F2B",
          p: 3,
          color: "#fff",
          borderRadius: 3,
        }}
      >
        <Typography>Exchange</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 600,
                color: grey[700],
                mr: { md: 5, xs: 2 },
              }}
            >
              Sell
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: 28,
                wordBreak: "break-all",
                overflow: "hidden",
              }}
            >
              {getCoin.market_data.current_price
                ? 0.609898 *
                  getCoin.market_data.current_price[currency.toLowerCase()]
                : ""}
            </Typography>
          </Box>

          <FormControl>
            <Select
              id="demo-simple-select"
              value={currency}
              onChange={handleChangeCurrency}
              sx={{
                p: 1,
                textTransform: "uppercase",
                backgroundColor: "#171520",
                color: "#fff",
                border: "none",
                height: "35px",
                "& .MuiTextField-root:after": { color: "#fff" },
              }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
              <MenuItem value={"GBP"}>GBP</MenuItem>
              <MenuItem value={"NGN"}>NGN</MenuItem>
              <MenuItem value={"JPY"}>JPY</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 600,
                mr: { md: 5, xs: 2 },
                color: grey[700],
              }}
            >
              Buy
            </Typography>
            <Typography variant="h4" sx={{ fontSize: 28 }}>
              {"0.609898"}
            </Typography>
          </Box>

          <FormControl>
            <Select
              id="demo-simple-select"
              value={coin}
              onChange={handleChangeCoin}
              sx={{
                p: 1,
                backgroundColor: "#171520",
                color: "#fff",
                border: "none",
                height: "35px",
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              <MenuItem value={"BTC"}>BTC</MenuItem>
              <MenuItem value={"ETH"}>ETH</MenuItem>
              <MenuItem value={"BNB"}>BNB</MenuItem>
              <MenuItem value={"SOL"}>SOL</MenuItem>
              <MenuItem value={"XRP"}>XRP</MenuItem>
              <MenuItem value={"DOGE"}>DOGE</MenuItem>
              <MenuItem value={"MATIC"}>MATIC</MenuItem>
              <MenuItem value={"ADA"}>ADA</MenuItem>
              <MenuItem value={"DOT"}>DOT</MenuItem>
              <MenuItem value={"TRX"}>TRX</MenuItem>
              <MenuItem value={"AVAX"}>AVAX</MenuItem>
              <MenuItem value={"LINK"}>LINK</MenuItem>
              <MenuItem value={"ETC"}>ETC</MenuItem>
              <MenuItem value={"ALGO"}>ALGO</MenuItem>
              <MenuItem value={"NEAR"}>NEAR</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 600,
              color: grey[700],
            }}
          >
            {`1${getCoin.symbol.toUpperCase()}`} ={" "}
            {getCoin.market_data.current_price
              ? getCoin.market_data.current_price[currency.toLowerCase()]
              : ""}
            {currency}
          </Typography>
          <Button
            sx={{ backgroundColor: "#416AFF" }}
            variant="contained"
            endIcon={<Arrow />}
          >
            Exchange
          </Button>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "5%",
            height: 40,
            left: -2,
            borderRight: "4px solid #416AFF",
          }}
        />
      </Stack>
    </Grid>
  );
};

export default Exchange;
