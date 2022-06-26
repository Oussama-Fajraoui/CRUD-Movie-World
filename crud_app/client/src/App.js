import logo from './logo.svg';
import AddUser from './components/AddUser.js';
import AllUsers from './components/AllUsers.js';
import NavBar from './components/NavBar';
import Codeforinterview from './components/Codeforinterview.js';
import './App.css';


import { BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path='/' element={<Codeforinterview />} />
      <Route path='/all' element={<AllUsers />} />
      <Route path='/add' element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
