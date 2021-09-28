import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/globalContext";
import { Grid, Card, Box } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import CoinCard from "../CoinCard/coincard";

function MainPage() {
  const { getCoin, coins, setWatchlist, watchlist } = useContext(AppContext);

  useEffect(() => {
    getCoin();
  }, []);

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="Center"
        marginTop="1rem"
        marginBottom="1rem"
        padding="1rem"
      >
        {coins.map((coin) => {
          return (
            <Grid key={coin.id} item minWidth="360px" maxWidth="360px" xs={4}>
              <Card>
                <Box
                  onClick={() => {
                    setWatchlist([...watchlist, coin.id]);
                  }}
                  position="absolute"
                  marginTop="0.2rem"
                  marginLeft="0.2rem"
                >
                  {watchlist.includes(coin.id) ? (
                    <StarRoundedIcon color="primary" />
                  ) : (
                    <StarRoundedIcon color="disabled" />
                  )}
                </Box>
                <CoinCard coin={coin} />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default MainPage;
