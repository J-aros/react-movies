import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Watchlist from "./components/WatchList/Watchlist";
import Watched from "./components/Watched/Watched";
import AddMovie from "./components/AddMovie/AddMovie";
import { GlobalProvider } from "./store/Context/globalState";
import "./lib/font-awesome/css/all.min.css";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<AddMovie />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
