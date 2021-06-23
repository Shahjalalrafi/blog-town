import './App.css';
import Home from './Component/Home/Home/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import AddBlog from './Component/Dashboard/AddBlog/AddBlog';
import Manager from './Component/Dashboard/Manager/Manager';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route to ='/dashboard'>
            <Dashboard />
          </Route>

          <Route to ='/manager'>
            <Manager />
          </Route>


          <Route path='/addBlog'>
            <AddBlog />
          </Route>

          <Route path="/blog/:id">

          </Route>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path="*">
            <h2>Page not found!!</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


// http://preview.themeforest.net/item/retro-portfolio-one-page-vintage-wordpress-theme/full_screen_preview/1708109?_ga=2.261395533.1918567141.1624424097-325015019.1618453926

// github
// https://github1s.com/MdTasib/Firebase/blob/HEAD/src/Private-Route/Commarce.js