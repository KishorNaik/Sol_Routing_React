import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductModel from "../../Models/ProductModel";

interface IProductsProps{

}

interface IProductState{
    ProductList:ProductModel[]
}


export default class Products extends Component<IProductsProps,IProductState>{

    constructor(props:IProductsProps){
        super(props);

        this.state={
            ProductList:[
                {
                    id:1,
                    ProductName:"Pepsi"
                },
                {
                    id:2,
                    ProductName:"Coke"
                },
                {
                    id:3,
                    ProductName:"Thums Up"
                }
            ]
        }
    }

    public render():JSX.Element{
        return (
            <React.Fragment>
                <ul>
                {this.state.ProductList.map((data )=>{
                    return (
                        <li key={data.id}>
                            <Link to={`/Product/${data.id}`} className="btn btn-dark">{data.ProductName}</Link>
                        </li>
                    )
                })}
                </ul>
                <hr></hr>
                <Link to="/mainparent" className="btn btn-success">Go to Main Parent (Nested)</Link>
            </React.Fragment>
        )
    }

}