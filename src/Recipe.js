import React from "react";
import Styles from './recipe.module.css'

const Recipe = ({title,calories,img,ing}) =>{
    return <div className={Styles.recipe}>
        <h1>{title}</h1>
        <ol>
            {ing.map((item,idx) => <li key ={idx}> {item.text}</li>)}
        </ol>
        <p> {calories}Kcal</p>
        <img src ={img} alt="recipe" className={Styles.image}/>
    </div>
    
}


export default Recipe