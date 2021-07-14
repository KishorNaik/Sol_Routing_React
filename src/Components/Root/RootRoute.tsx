import { Component } from "react";
import { Route, Router, Switch } from "react-router-dom";
import MainParent from "../NestedRoute/MainParent";
import Product from "../RouteParameters/Product";
import Products from "../RouteParameters/Products";
import History from "./History";

export default class RootRoute extends Component{

    public render(){
        return (
            <Router history={History}>
                <Switch>
                    <Route exact path="/" component={Products}></Route>
                    <Route exact path="/products" component={Products}>
                    </Route>
                    <Route path="/product/:id" component={Product}></Route>
                    // Nested
                    {/* <Router history={History}> */}
                        <Route path="/mainparent" component={MainParent}></Route>
                    {/* </Router> */}
                </Switch>
            </Router>
        )
    }
}