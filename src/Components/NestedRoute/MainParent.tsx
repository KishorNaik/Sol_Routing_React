import React, { Component } from "react";
import { Link, Route, Router, Switch } from "react-router-dom";
import ChildContent from "./ChildContent";
import History from "../Root/History";
import {RouteComponentProps} from "react-router-dom";

interface IMainParentProps extends RouteComponentProps{

}

interface IMainParentState{

}

export default class MainParent extends Component<IMainParentProps,IMainParentState>{

    private path:string | undefined=undefined;

    constructor(props:IMainParentProps){
        super(props);
        this.path=props.location.pathname;
    }

    public render(){
        return (
            <React.Fragment>
                <h1>Parent</h1>
                <ul>
                    <li>
                        <Link to={`${this.path}/topic/1`}>Topic 1</Link>
                    </li>
                    <li>
                        <Link to={`${this.path}/topic/2`}>Topic 2</Link>
                    </li>
                    <li>
                        <Link to={`${this.path}/topic/3`}>Topic 3</Link>
                    </li>
                </ul>
                <hr></hr>
                    <Link className="btn btn-danger" to="/products">Go to Products</Link>
                <hr></hr>
                    <Router history={History}>
                        <Switch>
                            <Route path={`/mainparent/topic/:id`} component={ChildContent}>
                            </Route>
                        </Switch>
                    </Router>
            </React.Fragment>
        )
    }

}