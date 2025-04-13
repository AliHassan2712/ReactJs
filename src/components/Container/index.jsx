import React from "react";
import "./container.css"
class Container extends React.PureComponent{
    render(){

        return(
<div className="container">{this.props.children}</div>
        )
    }
}

export default Container