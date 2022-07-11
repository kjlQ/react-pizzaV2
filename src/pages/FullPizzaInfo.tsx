import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';
import { changePizzaInfo } from '../redux/slices/pizzasSlice';
import { useDispatch,useSelector } from 'react-redux';

function FullPizzaInfo() {
  const {id} = useParams();
  const dispatch = useDispatch()

  const {price,imageUrl,title,contain} = useSelector(state=>state.pizzas.pizzaInfo)
 
  React.useEffect(()=> {
    async function fetchRightPizza() {
      try {
        const { data } = await axios.get(`https://62b1890ec7e53744afbb3fa1.mockapi.io/pizzasList/${id}`)
        dispatch(changePizzaInfo(data))
      } catch (error) {
        alert('Ошибка') 
      }
    }
    fetchRightPizza()
  }
  ,[])


  return(
    <div className='pizza-full-info'>
      <img src={imageUrl} alt="" />
      <div className="info">
        <h1>{title}</h1>
        <h3>Цена: {price} грн</h3>
        <p>{contain}</p>
      </div>
    </div>
  )
}

export default FullPizzaInfo

