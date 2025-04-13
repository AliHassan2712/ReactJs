import React from "react";
import "./cards.css";
class Cards extends React.Component {
  render() {
    const {name , parg , link , rev} = this.props
    return (
      <>
        <div className= {`card ${rev ? "cardrevres" : ""}`}>
          <span>Name :{name} </span>
         {link ? <img src={link}></img> : ''}
          <p>{parg}</p>
        </div>
      </>
    );
  }
}

export default Cards;
