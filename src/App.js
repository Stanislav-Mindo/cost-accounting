import {useState} from 'react';
import Costs from "./Components/Costs/Costs";
import NewCost from "./Components/NewCost/NewCost";

const initianCosts = [
  {
    id: 'c1',
    date: new Date(2022, 2, 12),
    name: 'Холодильник',
    amount: 999.99,
  },
  {
    id: 'c2',
    date: new Date(2021, 1, 2),
    name: 'MacLook',
    amount: 259.99,
  },
  {
    id: 'c3',
    date: new Date(2021, 7, 23),
    name: 'MacBook',
    amount: 2379.99,
  },
  {
    id: 'c4',
    date: new Date(2023, 5, 5),
    name: 'Шкаф',
    amount: 57.99,
  },
  {
    id: 'c5',
    date: new Date(2023, 9, 15),
    name: 'Стул',
    amount: 33.99,
  },
  {
    id: 'c6',
    date: new Date(2022, 2, 12),
    name: 'TV',
    amount: 1439.99,
  },
  
];

function App() {

   const [costs, setCosts] = useState(initianCosts)


  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
    
  }
  return (
    <div>
      <NewCost onAddCost = {addCostHandler}/>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
