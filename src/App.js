import Sidebar from "./Component/Sidebar/Sidebar";
import Topbar from "./Component/Topbar/Topbar";
import Home from "./Component/Pages/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import UserList from "./Component/UserList/UserList";
import User from "./Component/User/User";

// Routes or Switch almost same
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users/:userId">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
