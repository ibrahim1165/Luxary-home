import './App.css';
import Nabver from './Pages/Shared/Nabver';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Longin from './Pages/Auth/Longin';
function App() {
  return (
    <>
    <Nabver>
    </Nabver>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Longin />} />
    </Routes>
    </>
    
      
  );
}

export default App;
