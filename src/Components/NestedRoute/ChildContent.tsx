import React, { Component } from "react";
import {RouteComponentProps,Link} from "react-router-dom";

interface RouteParameters{
    id:string
}


interface IChildProps extends RouteComponentProps<RouteParameters>{

}

interface IChildState{

}

export default class ChildContent extends Component<IChildProps,IChildState>{

    constructor(props:IChildProps){
        super(props);
        //console.log(props);
    }

    public render(){
        return (
           <React.Fragment>
               <h1>Topic {this.props.match.params.id}</h1>
               {/* {console.log(this.props.location)} */}

               <Link className="btn btn-outline-dark" to="/products">Go to Products</Link>
               <Link className="btn btn-outline-success" to="/mainparent">Go to Main Parent</Link>
           </React.Fragment>
        )
    }
}