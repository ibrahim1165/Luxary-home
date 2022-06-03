import './App.css';
import Nabver from './Pages/Shared/Nabver';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Longin from './Pages/Auth/Longin';
import Singup from './Pages/Auth/Singup';
function App() {
  return (
    <>
    <Nabver>
    </Nabver>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Longin />} />
    <Route path='/signup' element={<Singup />} />
    </Routes>
    </>
    
      
  );
}

export default App;
