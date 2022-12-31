import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { coin, initialStateType } from "../hooks";

const initialState: initialStateType = {
  coins: [],
  status: "idle",
  getCoin: {
    categories: [""],
    country_origin: "",
    description: "",
    hashing_algorithm: "",
    id: "",
    image: {
      thumb: "",
      small: "",
      large: "",
    },
    links: {
      homepage: [],
      blockchain_site: [],
      official_forum_url: [],
      chat_url: [],
      announcement_url: [],
      repos_url: {
        github: [],
        bitbucket: [],
      },
      subreddit_url: "",
    },

    market_cap_rank: 0,
    name: "",
    symbol: "",
    market_data: {
      total_supply: 0,
      max_supply: 0,
      circulating_supply: 0,
      price_change_percentage_24h: 0,
    },
  },
};

const coinSlice = createSlice({
  name: "coins",
  initialState,
  // tslint:disable-next-line:no-empty
  reducers: {
    setCoins: (state, { payload }: PayloadAction<Array<coin>>) => {
      state.coins = payload;
      state.status = "idle";
    },
    setCoinDetails: (state, { payload }: PayloadAction<any>) => {
      state.getCoin = payload;
    },
  },
});

export const { setCoins, setCoinDetails } = coinSlice.actions;

export default coinSlice.reducer;
