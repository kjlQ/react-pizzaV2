import React from "react";

type CategorieType = {
  value:number;
  handleClickCategorie: (id:number) => void;
}

const Categories:React.FC<CategorieType> = ({value,handleClickCategorie}) => {

  const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые',]


  return(
    <div className="categories">
      <ul>
        {categories.map((item,i)=>(<li key={i} onClick={()=>handleClickCategorie(i)} className={i===value? 'active' : ''} >{item}</li>))}
      </ul>
    </div>
  )
}
export default Categories