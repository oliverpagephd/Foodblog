import React, {useState, useEffect, Fragment} from "react";
import './App.css';
import { Switch, Route, NavLink, useParams, useRouteMatch } from "react-router-dom";
import DetailedRecipe from "./DetailedRecipe"
import { Container, Row, Col, Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <Container style={{backgroundColor: "skyblue"}}>
    
    <Row>   
    <Col>HOME</Col>
    <Col>ABOUT</Col>
    <Col>CONTACT</Col>
    </Row>
    
    
    <Switch>
    <Route exact path="/">
    <nav>
    {recipes.map((recipe) => (
      <li key={recipe.sys.id}>
      <NavLink to={`${path}${recipe.sys.id}`}>
      {recipe.fields.title}
      </NavLink>
      </li>))}
      </nav>
      
      <Carousel>
      {recipes.map((recipe) => (
        <Carousel.Item interval={2000}>
        <img
        className="d-block w-100"
        key={recipe.sys.id}
        src={`http:${recipe.fields.image.fields.file.url}`}
        alt={`Picture of ${recipe.fields.title}`}
        />
        <Carousel.Caption>
        <h3>{recipe.fields.title}</h3>
        </Carousel.Caption>
        </Carousel.Item>
        ))}
        </Carousel>
        
        </Route>
        <Route path="/:id" render={props => (
          <DetailedRecipe recipes={recipes} {...props} />
          )}/>
          
          </Switch>
          
          
          
          </Container>
          );
        }
        
        export default App;
        