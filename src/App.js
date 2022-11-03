import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./Profile";
import Links from "./Links";
import Footer from "./Footer";
import Contact from "./Contact";

const App = () => {

    return (
        <>
           <Router>
                <div className="container">
                    <Switch>
                        <Route path="/Slack-HNG9-Stage1-task-">
                            <Profile />
                            <Links />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                    </Switch>

                    <Footer />
                </div>
           </Router>
        </>
    );
}

export default App;
