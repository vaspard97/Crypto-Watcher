import { Link } from "react-router-dom";
import { Typography, Avatar, Box } from "@mui/material";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

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
  } else return value;
}

function formatDecimals(number) {
  if (typeof number === "number") {
    return number.toFixed(2);
  } else return number.toString();
}

function CoinCard({ coin }) {
  return (
    <>
      <Link
        to={`coin/${coin.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Box display="flex" alignItems="center" sx={{ p: 2 }}>
          <Box paddingRight="0.5rem">
            <Avatar src={coin.image} sx={{ position: "static" }} />
          </Box>
          <Box sx={{ width: 1 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              sx={{ width: 1 }}
            >
              <Box paddingRight="0.25rem">
                <Typography variant="h6">{coin.name}</Typography>
              </Box>
              <Box>
                <Typography variant="h6">
                  {formatCurrency.format(coin.current_price)}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: 1 }}>
              <Box
                sx={{ width: 1 }}
                display="flex"
                justifyContent="space-between"
              >
                <Box display="flex" alignItems="center">
                  <Box paddingRight="0.5rem">
                    <Typography variant="subtitle2">
                      {coin.market_cap_rank}
                    </Typography>
                  </Box>
                  <Box paddingRight="0.5rem">
                    <Typography variant="subtitle2">
                      {coin.symbol.toUpperCase()}
                    </Typography>
                  </Box>

                  <Box paddingRight="0.5rem">
                    {coin.price_change_percentage_24h > 0 ? (
                      <Box display="flex" alignItems="center">
                        <ArrowDropUpRoundedIcon
                          style={{ color: "green", margin: "-6px" }}
                        />
                        <Typography
                          variant="subtitle2"
                          color="green"
                          textAlign="center"
                        >
                          {formatDecimals(coin.price_change_percentage_24h)}%
                        </Typography>
                      </Box>
                    ) : (
                      <Box display="flex" alignItems="center">
                        <ArrowDropDownRoundedIcon
                          style={{ color: "red", margin: "-6px" }}
                        />
                        <Typography
                          variant="subtitle2"
                          color="red"
                          textAlign="center"
                        >
                          {formatDecimals(coin.price_change_percentage_24h)}%
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>
                <Box>
                  <Typography variant="subtitle2">
                    Mkt Cap: ${abbreviateNumber(coin.market_cap)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    </>
  );
}

export default CoinCard;
