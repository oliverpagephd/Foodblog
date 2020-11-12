import React, {useState, useEffect} from "react";
import Detail from "./Detail"
import './App.css';
import { Switch, Route, NavLink, useParams, useRouteMatch } from "react-router-dom";
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
  );
}

export default App;
