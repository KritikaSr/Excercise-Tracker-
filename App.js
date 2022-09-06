import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import List from "./components/exercises-list.component";
import Edit from "./components/edit-exercise.component";
import Create from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={List} />
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create" component={Create} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
