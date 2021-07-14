import React, { Component, MouseEvent } from "react";
import {RouteComponentProps} from "react-router-dom";
import History from "../Root/History";

interface RouteParameters{
    id:string
}


interface IProductProps extends RouteComponentProps<RouteParameters>{

}

interface IProductState{

}

export default class Product extends Component<IProductProps,IProductState>{

    constructor(props:IProductProps){
        super(props);
    }

    private OnBackButtonClickHandler=(event:MouseEvent):void=>{
        
        //Method 1
        //History.push("/products");

        // Method 2
        this.props.history.push("/products");
    }

    public render(){
        return (
            <React.Fragment>
                <h2>Product {this.props.match.params.id}</h2>
                <button className="btn btn-secondary" onClick={this.OnBackButtonClickHandler}>Back</button>
            </React.Fragment>
        )
    }
}