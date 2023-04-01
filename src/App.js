import "./App.css";
import Header from "./Components/Header/Header.js";
import Dashboard from "./Pages/Dashboard/Dashboard.js";
import AddEvent from "./Pages/AddEvent/AddEvent.js";
import { Navigate } from "react-router-dom";

import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route
            path="/"
            exact
            element={<Navigate replace to="/dashboard" />}
          />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/add_event" element={<AddEvent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
