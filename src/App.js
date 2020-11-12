<<<<<<< HEAD
import React, {useState, useEffect} from "react";
import Detail from "./Detail"
import './App.css';
import { Switch, Route, NavLink, useParams, useRouteMatch } from "react-router-dom";
import { Container, Row, Col, Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
=======
import React, {useState, useEffect, Fragment} from "react";
import './App.css';
import { Switch, Route, NavLink, useParams, useRouteMatch } from "react-router-dom";
import DetailedRecipe from "./DetailedRecipe"
import { Container, Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from'./NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { News } from './News';

>>>>>>> create-navbar
var contentful = require('contentful')

function App() {

  const [data, setData] = useState([]);
  useEffect(() => {
    //Initialising the client
    var client = contentful.createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE,
      accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY
    });
    //Instead of using fetch; is incorporated in contenful
    client.getEntries().then(function (entries) {
      setData(entries.items);
      console.log(entries.items);
    });
  }, []);

  return (
<<<<<<< HEAD
    <div className="App">
      <nav>
        {data.map((e) => (
          <NavLink to={e.sys.id}>{e.fields.title}</NavLink>
        ))}
      </nav>
      <Switch>
        <Route exact path="/">
          <h1>hi</h1>
        </Route>
        <Route path="/:id">
          <Detail data={data} />
        </Route>
      </Switch>
    </div>
=======
    <Container style={{backgroundColor: "#bedbbb"}}>
    
    
  
   
    <NavigationBar>  
    <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/about" component={About} />
       <Route path="/news" component={News} />
      </Switch>
   </NavigationBar>
   

 





    <Carousel>
      {recipes.map((recipe) => (
        <Carousel.Item interval={3000}>
          <img height="500" 
            className="d-block w-100"
            src={`http:${recipe.fields.image.fields.file.url}`}
            alt={`Picture of ${recipe.fields.title}`}
          />
          <Carousel.Caption>
            <h3>{recipe.fields.title}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>


      

      <Switch>
            <Route exact path="/">
              <nav className="nam">
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

         

     

          </Container>
>>>>>>> create-navbar
  );
}

export default App;
