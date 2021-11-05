import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  RouteComponentProps,
} from "react-router-dom";

import Topnav from "./components/Topnav";
import Home from "./pages/Home/Home";
import PersonsHandler from "./pages/PersonsHandler/PersonsHandler";
import PersonsList from "./pages/PersonsList/PersonsList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personhandler" element={<PersonsHandler />} />
        <Route path="/personsList" element={<PersonsList />} />
      </Routes>
    </Router>
  );
}

export default App;
