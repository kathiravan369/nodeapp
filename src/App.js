import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import UpdateUser from './Components/UpdateUser';
import CreateUser from './Components/CreateUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route  path ='/create' element={<CreateUser/>}></Route>
          <Route  path ='/update/:id' element={<UpdateUser/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
