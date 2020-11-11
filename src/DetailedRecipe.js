import React, {useState, useEffect} from "react";
import './App.css';
import './DetailedRecipe.css'
import { Container, Row, Col, Image, Card} from "react-bootstrap";
import { Switch, Route, NavLink, useParams, useRouteMatch } from "react-router-dom";
var contentful = require('contentful')

export default function DetailedRecipe(props){ 
    
    const {id} = useParams();

  const [recipe, setRecipe]=useState()


  const getRecipe = () => {
    console.log(id)
    console.log(props.recipes)
    const recipe = props.recipes.find(recipe =>  id === recipe.sys.id)
    setRecipe(recipe)
    console.log(recipe)  
  }

    useEffect(()=>{ 
        getRecipe()
    },[id])

    
    //destructuring
    //const {recipes} = props 

    return recipe ? ("its here")  : ("its not here yet :O")
    
    
}