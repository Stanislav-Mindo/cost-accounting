import React from "react";

import "./CostItem.css";
import CostDate from "../CostDate/CostDate";
import Card from "../Card/Card";


function CostItem (props) {
  

  return (
    <Card className="cost-item">
      <CostDate date={props.date}/>
      <div className="cost-item__description">
        <h2>{props.name}</h2>
        <div className="cost-item__price">${props.amount}</div>       
      </div>     
    </Card>
  )
}
export default CostItem