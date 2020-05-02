import React, {Component} from 'react';
import './App.css';
import NavBar from "./NavBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import CoffeeShopsList from "./CoffeeShopsList";
import Api from "./Api";
import CoffeeShopsEdit from "./CoffeeShopsEdit";

const api = new Api();

class App extends Component {

    render() {
        const navbar = <NavBar/>;
        return (
            <Router>
               <Switch>
                   <Route path='/' exact={true}
                          render={(props) => <Home {...props} api={api} navbar={navbar}/>}
                   />
                   <Route path='/coffee-shops' exact={true}
                          render={(props) => <CoffeeShopsList {...props} api={api} navbar={navbar}/>}
                   />
                   <Route path='/coffee-shops/:id'
                          render={(props) => <CoffeeShopsEdit {...props} api={api} navbar={navbar}/>}
                   />
               </Switch>
            </Router>
        )
    }
}

export default App;
