import { CardContent, Avatar, Typography, Grid } from "@mui/material";

function CoinDetailsHeader({ coinDetails }) {
  let formatCurrency = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "usd",
  });

  const [coin] = coinDetails;
  console.log(coinDetails);
  return (
    <CardContent>
      <Grid container>
        <Grid item display="flex" alignItems="center" flexGrow={1}>
          <Avatar
            src={coin.image}
            sx={{ marginRight: "0.2rem", height: 50, width: 50 }}
          />
          <Grid item>
            <Typography variant="h5">{coin.name}</Typography>
            <Grid item display="flex" alignItems="center">
              <Typography
                variant="subtitle2"
                paddingRight="0.2rem"
              >{`Rank #${coin.market_cap_rank}`}</Typography>
              <Typography variant="subtitle2">
                {coin.symbol.toUpperCase()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2">Current Price</Typography>
          <Grid item display="flex" alignItems="center">
            <Typography variant="h6">
              US{formatCurrency.format(coin.current_price)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  );
}

export default CoinDetailsHeader;
