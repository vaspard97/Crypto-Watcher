import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/NavBar/navbar";
import ControllerTab from "./components/Tabs/Tabs";
import MainPage from "./components/Pages/MainPage";
import WatchListPage from "./components/Pages/WatchListPage";
import CoinDetailsPage from "./components/Pages/CoinDetailsPage";
import PortfolioPage from "./components/Pages/PortfolioPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ControllerTab />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/watchlist" component={WatchListPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/coin/:id" component={CoinDetailsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
