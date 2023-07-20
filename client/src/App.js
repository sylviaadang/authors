import logo from './logo.svg';
import './Authors.css';
import Dashboard from './views/Dashboard';
import New from './views/New';
import Update from './views/Update';
import {Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>

      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path='/authors/new' element={<New/>}></Route>
        <Route path='/edit/:id' element={<Update/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
