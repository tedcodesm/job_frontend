import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './context/ProtectedRoute';
import AdminPage from './pages/AdminPage';
import JobPage from './pages/JobPage';
import AddPage from './pages/AddPage';
import ProfilePage from './pages/ProfilePage';
import JobUpdatePage from './pages/JobUpdatePage';
import ViewPage from './pages/ViewPage';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Divide } from 'react-feather';
import SigninPage from './pages/SigninPage';
import OtpPage from './pages/OtpPage';

function App() {
  return (
    <div>
      
    <Routes>
      <Route element={< ProtectedRoute/>} >
      <Route index path="/" element={<HomePage />} />
      <Route  path="/admin" element={<AdminPage />} />
      <Route  path="/job" element={<JobPage />} />
      <Route  path="/add" element={<AddPage />} />
      <Route  path="/prof" element={<ProfilePage />} />
      <Route  path="/update" element={<JobUpdatePage />} />
      <Route  path="/view/:name" element={<ViewPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route  path="/signin" element={<SigninPage />} />
      <Route  path="/otp" element={<OtpPage />} />


    </Routes>
    <ToastContainer/>
    </div>
  );
}

export default App;
