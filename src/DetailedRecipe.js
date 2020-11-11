import React, {useState, useEffect} from "react";
import './App.css';
import { Switch, Route, NavLink, useParams, useRouteMatch } from "react-router-dom";
var contentful = require('contentful')

export default function DetailedRecipe(props){ 
    
    const {id} = useParams();
    

  const [detailedRecipe, setDetailedRecipe]=useState()

  function getRecipe () {
    const recipe = props.recipes.find(recipe =>  id === recipe.sys.id)
    setDetailedRecipe(recipe)
    return detailedRecipe
}
   
    useEffect(()=>{ 
        getRecipe()
    },[id])

    
    //destructuring
    //const {recipes} = props 

    return (
        <>  
        {console.log(detailedRecipe)}
            <p>blubb</p>
        </>
    )
}