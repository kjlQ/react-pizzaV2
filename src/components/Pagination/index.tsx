import React from 'react'
import styles from './Pagination.module.scss'

type PaginationType = {
  paginationPage:number;
  setPaginationPage: (i:number) => void;
}

const Pagination:React.FC<PaginationType> = ({paginationPage,setPaginationPage}) => {
  return(
    <div>
      <ul className={styles.paginationList}>
        <li onClick={paginationPage > 1 ? () => setPaginationPage(paginationPage-1) : ''}>prev</li>
        <li onClick={()=>setPaginationPage(1)} className={paginationPage === 1 ? styles.selected : undefined }>1</li>
        <li onClick={()=>setPaginationPage(2)} className={paginationPage === 2 ? styles.selected : undefined }>2</li>
        <li onClick={()=>setPaginationPage(3)} className={paginationPage === 3 ? styles.selected : undefined }>3</li>
        <li onClick={paginationPage < 3 ? ()=>setPaginationPage(paginationPage+1): ''}>next</li>
      </ul>
    </div>
  )
}

export default Pagination