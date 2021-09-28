import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Typography, Grid, Card } from "@mui/material";

import CoinDetailsHeader from "../CoinDetails/CoinDetailsHeader";
import CoinDetails from "../CoinDetails/CoinDetails";
import CoinChart from "../CoinDetails/CoinChart";

function CoinDetailsPage() {
  const { id } = useParams();
  const [coinChart, setCoinChart] = useState({});
  const [coinDetails, setCoinDetails] = useState({});
  const [isLoading, setLoading] = useState(true);

  const URLmonthly = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`;
  const URLweekly = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`;
  const URLdaily = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`;
  const URLcoinDetails = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&per_page=1&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d`;
  const getCoinChart = async () => {
    setLoading(true);
    const resMonthly = await fetch(URLmonthly);
    const monthly = await resMonthly.json();
    const responseWeekly = await fetch(URLweekly);
    const weekly = await responseWeekly.json();
    const responseDaily = await fetch(URLdaily);
    const daily = await responseDaily.json();

    const responseDetails = await fetch(URLcoinDetails);
    const details = await responseDetails.json();
    setCoinChart({
      month: monthly.prices,
      week: weekly.prices,
      day: daily.prices,
    });

    setCoinDetails(details);
    setLoading(false);
  };

  useEffect(() => {
    getCoinChart();
  }, []);
  const renderData = () => {
    if (isLoading) {
      return (
        <Typography variant="h3" textAlign="center">
          Loading...
        </Typography>
      );
    }
    return (
      <Grid
        container
        alignContent="center"
        marginTop="1rem"
        marginBottom="1rem"
        marginLeft="auto"
        marginRight="auto"
        alignItems="center"
        maxWidth="1200px"
      >
        <Grid item minWidth={"360px"} xs={12} md={12} padding="1rem">
          <Card>
            <CoinDetailsHeader coinDetails={coinDetails} />
            <CoinChart coinChart={coinChart} />
          </Card>
        </Grid>
        <Grid item minWidth={"360px"} xs={12} md={12} padding="1rem">
          <CoinDetails coinDetails={coinDetails} />
        </Grid>
      </Grid>
    );
  };
  return renderData();
}

export default CoinDetailsPage;
