import Home from './component/Home';
import Header from './component/Header';
import About from './component/About';
import Contact from './component/Contact';
import Instruction from "./component/Instruction"
import { Route, Switch } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // const [levelOne, setLevelOne] = useState([])
  // const [levelTwo, setLevelTwo] = useState([])
  // const [levelThree, setLevelThree] = useState([])

  // useEffect(() => {
  //   fetch()
  // })




  return (
    <div className="App">
      <Header />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/instruction">
          <Instruction />
        </Route>
        <Route path="*">
          <h1>404 </h1>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
