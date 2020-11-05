import React, {useState, useEffect} from "react";
import './App.css';
import { Switch, Route, NavLink, useParams, useRouteMatch } from "react-router-dom";
import DetailedRecipe from "./DetailedRecipe"
var contentful = require('contentful')

function App() {

  const [recipes, setRecipes]=useState([])
  //Initialising and fetching recipes once upon first loading of page
  useEffect(()=>{
  //Initialising the client
    var client = contentful.createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE,
      accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY
    })
  //Instead of using fetch; is incorporated in contenful
    client.getEntries()
    .then(function (entries) {
      entries.items.forEach(function (entry) {
            console.log(entry)
      })
      setRecipes(entries.items)
    })
  },[])

  let { path } = useRouteMatch();

  return (
    <div className="App">

     <h1> Hello dreamteam</h1>
   
{/*loop over recipes array and make a list entry for each recipe name with a link to the recipe page. each li-tag needs individual key*/}

      <nav>
      {recipes.map((recipe) => (
        <li key={recipe.sys.id}>
          <NavLink to={`${path}${recipe.fields.title}`}>
          {recipe.fields.title}
          </NavLink>
        </li>))}
      </nav> 

      <Switch>
            <Route exact path="/">
              <nav>
                {recipes.map((recipe) => (
                  <li key={recipe.sys.id}>
                    <NavLink to={`${path}${recipe.fields.title}`}>
                    {recipe.fields.title}
                    </NavLink>
                  </li>))}
              </nav>
            </Route>
            <Route path="/:recipeTitle">
             <p>i'm a recipe!</p>
              <DetailedRecipe recipes={recipes} />
            </Route>
          </Switch>

    </div>
  );
}

export default App;
