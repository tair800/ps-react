import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameDetails from "./pages/GameDetails";
// import NewGames from "./pages/NewGames";
// import PreOrders from "./pages/PreOrders";
import PSNavbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <PSNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<GameDetails />} />
        {/* <Route path="/new-games" element={<NewGames />} />
        <Route path="/pre-orders" element={<PreOrders />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
