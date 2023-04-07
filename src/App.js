import './App.css';
import HomePage from './home/HomePage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header'
import SinglePage from './components/watch/SinglePage'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/singlepage/:id' component={SinglePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
