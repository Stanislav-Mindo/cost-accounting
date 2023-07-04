import './CostList.css';
import CostItem from '../CostItem/CostItem';

const CostList = (props) =>{  

  if(props.costs.length === 0){
    return <h2 className='cost-list__fallback'>В Этом Году Расходов Нет</h2>
  }
  return(
    <div>
      <ul className='cost-list'>
      {props.costs.map((cost) => (
      <CostItem 
      key={cost.id}  
      date={cost.date} 
      name={cost.name} 
      amount={cost.amount}/>
    ))}
      </ul>
    </div>
  )
}

export default CostList