import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AddUser from './users/AddUser';
import ViewUser from './users/ViewUser';
import EditUser from './users/EditUser';
import Pagehome from './pages/Pagehome';
import Login from './pages/Login/Login';
function App() {
  return (
    <div className="App">
      <Router><Navbar>
        
        
        </Navbar>
        
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/adduser" element={<AddUser/>}></Route>
          <Route exact path="/edituser/:id" element={<EditUser/>}></Route>
          <Route exact path="/viewuser/:id" element={<ViewUser/>}></Route>
          <Route exact path="/home" element={<Pagehome></Pagehome>}></Route>
          {/* <Route exact path="/login" element={<Login></Login>}></Route> */}



        </Routes>
        
        </Router>
        
        
    </div>
  );
}

export default App;
