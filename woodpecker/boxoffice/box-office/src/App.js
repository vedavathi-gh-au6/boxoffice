import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';

import Home from './pages/Home'
import Starred from './pages/Starred';


function App() {
  return (
  

 
  <Switch>
    <Route path="/" exact><Home/></Route>
    <Route path="/starred" exact><Starred/></Route>
    <Route ><div>Not Found</div></Route>
  </Switch>
  
  );
}

export default App;
