import './App.css';
import Home from './Pages/HomePage/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Pages/Shared/Footer/Footer';
import Property from './Pages/PropertyPage/Property/Property';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/footer">
            <Footer></Footer>
          </Route>
          <Route path="/property">
            <Property></Property>
          </Route>

        </Switch>
      </Router >

    </div >
  );
}

export default App;
