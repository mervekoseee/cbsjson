import React from "react";
import  HomePage  from "../pages/HomePage";
import  ContactPage  from "../pages/ContactPage";
import  LoginPage  from "../pages/LoginPage";
import  About  from "../pages/About";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import PrivatePage from "../pages/PrivatePage";
import { useLocalStorage } from "../hooks/useLocalStorage";
import ForgotPage from "../pages/ForgotPage";
import ProfilePage from "../pages/ProfilePage";
import Deneme from "../pages/Deneme";



export const Routes = () => {
    return (
        <Router>
            <Switch>
            <GuestRoute path="/login" exact>
                    <LoginPage />
                </GuestRoute>
                <Route path="/" exact>
                    <HomePage />
                </Route>
                <Route path="/iletisim">
                    <ContactPage />
                </Route>
                <PrivateRoute path="/hakkimizda">
                    <About />
                </PrivateRoute>
                <Route path="/forgot">
                    <ForgotPage />
                </Route>
                <Route path="/profile">
                    <ProfilePage />
                </Route>
                <PrivateRoute path="/private">
                    <PrivatePage />
                </PrivateRoute>
                <Route path="/deneme" exact>
                    <Deneme />
                </Route>
            </Switch>
        </Router>
    );
};

function PrivateRoute({ children, ...rest }) {
    const [user] = useLocalStorage('user');
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user? (
                    children
                ) : (
                    
                    <Redirect to={{ pathname: "/login" , state: { from: location } } } >
                        {Swal.fire('Bu sayfaya ulaşmak için giriş yapmalısınız.')}
                    </Redirect>
                )
            }
        />
    )

}

function GuestRoute({ children, ...rest }) {
    const [user] = useLocalStorage('user');
    return (
        <Route
            {...rest}
            render={({ location }) =>
                !user? (
                    children
                ) : (
                    
                    <Redirect to={{ pathname: "/" , state: { from: location } } } >
                    </Redirect>
                )
            }
        />
    )

}