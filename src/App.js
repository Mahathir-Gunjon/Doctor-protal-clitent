import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Dashboard/Dashboard';
import MyAppoinment from './Dashboard/MyAppoinment';
import MyReviews from './Dashboard/MyReviews';
import MyHistory from './Dashboard/MyHistory';
import User from './Dashboard/User';
import RequireAdmin from './Pages/Login/RequreAdmin';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard/>
          </RequireAuth>
        } >
          <Route index element={<MyAppoinment></MyAppoinment>}/>
          <Route path='review' element={<MyReviews></MyReviews>}/>
          <Route path='history' element={<MyHistory/>}/>
          <Route path='users' element={<RequireAdmin>
            <User/>
          </RequireAdmin>}/>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer/>
      
    </>
  );
}

export default App;
