import { Card, CardContent, Typography, Divider, Grid } from "@mui/material";

let formatCurrency = new Intl.NumberFormat("en", {
  style: "currency",
  currency: "usd",
});

function abbreviateNumber(value) {
  if (typeof value === "number") {
    let newValue = value;
    const suffixes = ["", "K", "M", "B", "T"];
    let suffixNum = 0;
    while (newValue >= 1000) {
      newValue /= 1000;
      suffixNum++;
    }

    newValue = newValue.toPrecision(3);

    newValue += suffixes[suffixNum];
    return newValue;
  } else return "N/A";
}

function formatDecimals(number) {
  if (typeof number === "number") {
    return number.toFixed(2);
  } else return "N/A";
}
function CoinDetails({ coinDetails }) {
  const [detail] = coinDetails;

  return (
    <Card>
      <CardContent>
        <Typography>Statistics</Typography>
        <Divider />

        <Grid container>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <Typography variant="caption">Market Cap</Typography>
              <Typography
                variant="subtitle2"
                gutterBottom
              >{`US$${abbreviateNumber(detail.market_cap)}`}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">Circulating Supply</Typography>
              <Typography variant="subtitle2" gutterBottom>
                {abbreviateNumber(detail.circulating_supply)}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">Total Supply</Typography>
              <Typography variant="subtitle2" gutterBottom>
                {abbreviateNumber(detail.total_supply)}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">All Time High</Typography>
              <Typography variant="subtitle2" gutterBottom>
                {`US${formatCurrency.format(detail.ath)}`}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item xs={12}>
              <Typography variant="caption">Total Volume</Typography>
              <Typography variant="subtitle2" gutterBottom>
                {`${abbreviateNumber(detail.total_volume)}`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">Max Supply</Typography>
              <Typography variant="subtitle2" gutterBottom>
                {`${abbreviateNumber(detail.max_supply)}`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">Rank</Typography>
              <Typography variant="subtitle2" gutterBottom>
                {`#${detail.market_cap_rank}`}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">All Time High Change</Typography>
              {detail.ath_change_percentage > 0 ? (
                <Typography variant="subtitle2" gutterBottom color="green">
                  {`${formatDecimals(detail.ath_change_percentage)}%`}
                </Typography>
              ) : (
                <Typography variant="subtitle2" gutterBottom color="red">
                  {`${formatDecimals(detail.ath_change_percentage)}%`}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CoinDetails;
