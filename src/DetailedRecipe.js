import React, {useState, useEffect} from "react";
import './App.css';
import { Switch, Route, NavLink, useParams, useRouteMatch } from "react-router-dom";
var contentful = require('contentful')

export default function DetailedRecipe(props){ 
    const {RecipeName} = useParams();

    return(
        <>    
            <p>{props.recipes[1].fields.title}</p>
        </>
    )
}