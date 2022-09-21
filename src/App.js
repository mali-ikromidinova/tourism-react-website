import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Navbar from './Components/Navbar';
import Home from './pages/Home'
import Services from './pages/Services';
import SignUp from './pages/SignUp';
import Produts from './pages/Products';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Produts} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
