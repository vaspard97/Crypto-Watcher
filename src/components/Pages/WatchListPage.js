import React, { useContext, useEffect } from "react";
import { Grid, Card, Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppContext } from "../../context/globalContext";
import CoinCard from "../CoinCard/coincard";
function WatchListPage() {
  const { getCoin, coins, watchlist, setWatchlist } = useContext(AppContext);

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
        {watchlist.length < 1 ? (
          <Grid
            item
            display="flex"
            flexDirection="column"
            height={"100vh"}
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h3" textAlign="center" gutterBottom>
              Your Watchlist is empty
            </Typography>
            <Typography variant="subtitle2" textAlign="center">
              Start adding your favourite coin from the Home page
            </Typography>
          </Grid>
        ) : (
          <>
            {coins
              .filter((coin) => {
                return watchlist.includes(coin.id);
              })
              .map((coin) => {
                return (
                  <Grid
                    key={coin.id}
                    item
                    minWidth="360px"
                    maxWidth="360px"
                    xs={4}
                  >
                    <Card>
                      <Box
                        onClick={() => {
                          setWatchlist(
                            watchlist.filter((e) => {
                              return e !== coin.id;
                            })
                          );
                        }}
                        position="absolute"
                        marginTop="0.2rem"
                        marginLeft="0.2rem"
                      >
                        <DeleteIcon />
                      </Box>
                      <CoinCard coin={coin} />
                    </Card>
                  </Grid>
                );
              })}
          </>
        )}
      </Grid>
    </>
  );
}

export default WatchListPage;
