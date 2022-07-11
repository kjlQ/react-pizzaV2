import React from "react";
import styles from "./NotFound.module.scss"

const NotFound:React.FC = () => {
  
  return(
    <div className={styles.root}>
      <h1>Ничего не найдено</h1>
      <p>:(</p>
    </div>
  )
}

export default NotFound