import './App.css';
import Nabver from './Pages/Shared/Nabver';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Longin from './Pages/Auth/Longin';
import Singup from './Pages/Auth/Singup';
import Service from './Pages/Service/Service';
import Order from './Pages/Service/Order';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './Pages/Shared/Contact';
import DashBoard from './Pages/DesBoard/DashBoard';
import Footer from './Pages/Shared/Footer';
function App() {
  return (
    <>
      <Nabver>
      </Nabver>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Longin />} />
        <Route path='/order/:id' element={<Order />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/service' element={<Service />} />
        <Route path='/signup' element={<Singup />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <ToastContainer />
    </>


  );
}

export default App;
