const baseUrl = "https://api.coingecko.com/api/v3";
export const getCoinsData = async () => {
  try {
    const response: Response = await fetch(
      `${baseUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`
    );
    const coinsData = await response.json();

    const coins: Array<{ pv: number }> = coinsData.map((coin: any) => {
      let sparkline = coin.sparkline_in_7d.price;

      return {
        id: coin.id,
        name: coin.name,
        current_price: coin.current_price,
        image: coin.image,
        circulating_supply: coin.circulating_supply,
        market_cap: coin.market_cap,
        max_supply: coin.max_supply,
        sparkline,
        symbol: coin.symbol,
        price_change_24h: coin.price_change_24h,
        price_change_percentage_24h: coin.price_change_percentage_24h,
      };
    });
    return coins;
  } catch (e) {
    return [];
  }
};

export const getCryptoDescription = async (name: string) => {
  try {
    const response: Response = await fetch(
      `${baseUrl}/coins/${name}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    );
    const data = await response.clone().json();
    return data;
  } catch (e) {
    throw new Error("Network error: ");
  }
};

export const getHistoricalData = async (id: string) => {
  console.log(id);
  try {
    const response: Response = await fetch(
      `${baseUrl}/coins/${id}/market_chart?vs_currency=usd&days=300&interval=daily`
    );
    const data = await response.clone().json();
    return data;
  } catch (err) {
    throw new Error("Network error: ");
  }
};
