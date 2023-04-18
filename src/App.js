import React, { useEffect, useState } from 'react'
import './App.css'
import Recipe from './Recipe'


const App = () =>{
  const APP_ID ='a85ca182'
  const  APP_KEY ='0456f42766a11b0ef0949795b1b49ce7	'
  const [recipes,setRecipes] = useState([])
  const [search,setSearch] = useState()
  const [query,setQuery] = useState('icecream')

  const getRecipes = async () =>{

    const response =await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = response.json()
    return data
   }
   useEffect(() =>{
     getRecipes()
     .then(data =>{
      console.log(data.hits)
       setRecipes(data.hits)
      

     })
   },[search])
 
  

  return <div className='App'>
    <form className='search-form' onSubmit={e=>{
      e.preventDefault()
      setSearch(query)
      setQuery('')
    }}>
      <input type='text' className='search-bar' value={query} onChange={e => setQuery(e.target.value)}/>
      <button type='submit' className='search-button'>Search</button>
    </form>
    <div className='recipes'>
    {recipes.map((item,idx) => <Recipe title={item.recipe.label} calories={item.recipe.calories} img={item.recipe.image} ing={item.recipe.ingredients} key={idx}/>)}
    </div>
  </div>
  

  
}




export default App