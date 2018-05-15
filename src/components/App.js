import React from 'react'
import JokeList from "../containers/JokeList/JokeList";
import Menu from "./Menu/Menu";
import Home from "../containers/Home/Home";

import {
  Switch,
  Route
} from "react-router-dom";

import "./App.css";

const menuItems = [
  { id: 0, path: "/", text: "Home" },
  { id: 1, path: "/jokes", text: "Jokes Summary Page" },

];

const App = () => (
    <div className='App'>
      <header className="App-header">
        <p className="App-title">Dad Jokes</p>
      </header>
      <div className="content">
        <Menu menuItems={menuItems}/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route name="jokes" exact path="/jokes" component={JokeList}/>
          <Route name="joke" exact path="/jokes/:id" component={Home}/>
        </Switch>
      </div>
    </div>
)

export default App
