import './App.css';
import {Route, Router} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
function App() {
  return (
    <div className="App">
     <Route exact path='/'>
       <Home/>
     </Route>
     <Route path="/about">
       <About/>
     </Route>
    </div>
  );
}

export default App;
