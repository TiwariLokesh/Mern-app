// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Statusbar from './layout/Statusbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
<Route exact path='/login' element={<Login/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
