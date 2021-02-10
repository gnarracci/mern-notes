import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/cosmo/bootstrap.min.css';

import Navigation from './components/Navigation';
import CreateUser from './components/CreateUser';
import CreateNote from './components/CreateNote';
import NotesList from './components/NotesList';

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={NotesList} />
      <Route path="/edit/:id" component={CreateNote} />
      <Route path="/create" component={CreateNote} />
      <Route path="/user" component={CreateUser} />      
    </Router>
  );
}

export default App;
