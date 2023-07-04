import React from "react";
import './Costs.css'
import Card from "../Card/Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";
import CostList from "../CostList/CostList";
import CostDiagram from "../CostDiagram/CostDiagram";

function Costs(props) {

  const [selectedYear, setSelectedYear] = useState('2021');

  const yearChangeHandler = (year) => {
    setSelectedYear(year)
  };
  const filteredCosts = props.costs.filter(cost =>{
    return cost.date.getFullYear().toString() === selectedYear
  });
  
  
  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
        <CostDiagram costs={filteredCosts}/>
        <CostList costs={filteredCosts}/>
      </Card>      
    </div>
  )
}

export default Costs;