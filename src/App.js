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
  
      
   


    <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="http://www.erlebnis-schweiz.com/blog/wp-content/uploads/Burger.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://www.jocooks.com/wp-content/uploads/2011/09/french-toast-1-2-1-768x960.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i1.wp.com/nonnasway.com/wp-content/uploads/2015/04/vegetable-penne-dish.jpg?w=714&ssl=1"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>




  

    
   

 



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

     

          </Container>
  );
}

export default App;
