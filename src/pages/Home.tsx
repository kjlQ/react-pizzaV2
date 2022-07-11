import React from "react";
import CustomLoader from '../components/PizzaBlock/pizzaLoader';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Pagination from "../components/Pagination";
import { useSelector, useDispatch } from 'react-redux'
import { changeCategoryId , changeSortId , changePaginationPage} from '../redux/slices/filterSlice'
import { getPizzas } from '../redux/slices/pizzasSlice'

const Home:React.FC = () => {

  const {paginationPage,sortCategory,searchValue,categoryId} = useSelector((state)=>state.filter)
  const items = useSelector(state=>state.pizzas.pizzas)
  const isLoading = useSelector(state=>state.pizzas.loading)
  const dispatch = useDispatch()

  const handlePizzasShow = items
    // .filter((obj)=>{
    //   if(obj.title.toLowerCase().includes(searchValue.toLowerCase())) return true
    //   else return false
    // })
    .map((obj:any) => <PizzaBlock key={obj.id} {...obj} />)
    
    

  React.useEffect(()=>{
    // @ts-ignore
    dispatch(getPizzas({sortCategory,paginationPage,categoryId,searchValue}))
  },[categoryId,sortCategory,paginationPage,searchValue])
  

  return (
    <> 
    <div className="content__top">
      <Categories value={categoryId} handleClickCategorie={(id)=>dispatch(changeCategoryId(id))} />
      <Sort setSortCategorie={(value:number)=>dispatch(changeSortId(value))} />
    </div>
    <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoading
            ?[...new Array(4)].map(( _,index ) => <CustomLoader key={index} /> )
            : handlePizzasShow
          }
      </div>
      <Pagination paginationPage={paginationPage} setPaginationPage={(i)=>dispatch(changePaginationPage(i))} />
    </>
  )
}

export default Home