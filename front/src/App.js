import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Navigation from './components/Navigation';
import CreateUser from './components/CreateUser';
import CreateNote from './components/CreateNote';
import NotesList from './components/NotesList';

function App() {
  return (
    <div>
      <Navigation />
      Hello World
    </div>
  );
}

export default App;
