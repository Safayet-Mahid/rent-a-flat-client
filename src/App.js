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
import Agent from './Pages/AgentPage/Agent/Agent';
import Contact from './Pages/ContactPage/Contact/Contact';
import MorePropertyDetails from './Pages/PropertyPage/MorePropertyDetails/MorePropertyDetails';

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
          <Route path="/Property">
            <Property></Property>
          </Route>
          <Route path="/PropertyDetails/:property_id">
            <MorePropertyDetails></MorePropertyDetails>
          </Route>
          <Route path="/agents">
            <Agent></Agent>
          </Route>
          <Route path="/agents">
            <Agent></Agent>
          </Route>
          <Route path="/contacts">
            <Contact></Contact>
          </Route>

        </Switch>
      </Router >

    </div >
  );
}

export default App;
