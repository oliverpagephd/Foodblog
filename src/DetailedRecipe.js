import React, {useState, useEffect} from "react";
import './App.css';
import { Switch, Route, NavLink, useParams, useRouteMatch } from "react-router-dom";
var contentful = require('contentful')

export default function DetailedRecipe(props){ 
    
    const {id} = useParams();
    

  const [detailedRecipeTitle, setDetailedRecipeTitle]=useState()
  const [detailedRecipeDescription, setDetailedRecipeDescription]=useState()
  const [detailedRecipeInstructions, setDetailedRecipeInstructions]=useState()
  const [detailedRecipeUrl, setDetailedRecipeUrl]=useState()
  const [detailedRecipeIngredients, setDetailedRecipeIngredients]=useState()

  const getRecipe = async () => {
    const recipe = await props.recipes.find(recipe =>  id === recipe.sys.id)
    setDetailedRecipeTitle(recipe.fields.title)
    setDetailedRecipeDescription(recipe.fields.description)
    setDetailedRecipeInstructions(recipe.fields.instructions)
    setDetailedRecipeUrl(recipe.fields.image.fields.file.url)
    setDetailedRecipeIngredients(recipe.fields.ingriedients)
    console.log(recipe)
    
}
   
    useEffect(async()=>{ 
        await getRecipe()
    },[id])

    
    //destructuring
    //const {recipes} = props 

    return (
        <>  
       
       <p>{detailedRecipeTitle}</p>
       <p>{detailedRecipeDescription}</p>
       <p>{detailedRecipeInstructions}</p>
       <img src={`http:${detailedRecipeUrl}`}></img>
       <p>{"I'm the Ingredients!" + {detailedRecipeIngredients}}</p> 
       {console.log("hi")}
       {console.log(setDetailedRecipeIngredients)}
                  
        </>
    )
}