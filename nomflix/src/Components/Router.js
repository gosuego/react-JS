import React from "react";
import {HashRouter as Router} from "react-router-dom";
import Home from "Routes/Home";

export default () => (
    <Router>
        <Route path="/" exact component={Home}/>
    </Router>
);