import React from "react";
import  HomePage  from "../pages/HomePage";
import  ContactPage  from "../pages/ContactPage";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Map from "../pages/Map";


export const Routes = () => {
    return (
        <Router>
            <Switch>
            
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/iletisim">
                    <ContactPage />
                </Route>
                <Route path="/map">
                    <Map />
                </Route>
            </Switch>
        </Router>
    );
};



