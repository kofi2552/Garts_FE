import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Sell from "./pages/Sell";
import Pricing from "./pages/Pricing";
import Landing from "./pages/Landing";
import Trending from "./pages/Trending";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import SingleProduct from "./components/SingleProd/SingleProduct";
import Checkout from "./pages/Checkout";
import LandMain from "./pages/LandMain";
import Test from "./pages/Test";
import Contact from "./pages/Contact";
import Profile from "./pages/user/Profile"
import AdminProfile from "./pages/admin/AdminProfile";
import AddProject from "./pages/projects/AddProject";
import ConfirmProDownload from "./components/SingleProd/ConfirmProDownload";
import Layout2 from "./components/Layout2";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ConfirmFree from "./components/SingleProd/ConfirmFree";
// import Auth0ProviderWithHistory from "./auth0-provider";


function App() {

  return (
    // <Auth0ProviderWithHistory>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandMain />}>
            <Route index element={<Landing />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/test-page" element={<Test />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          

          <Route path="/" element={<Layout />}>
            <Route path="search" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="admin" element={<AdminProfile />} />
            <Route path="trending" element={<Trending />} />
            <Route path="project/:id" element={<SingleProduct />} />
          </Route>

          <Route path="/" element={<Layout2 />}>
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/verify_payment/:id" element={<ConfirmFree />} />
          <Route path="/verify/" element={<ConfirmProDownload />} />
          </Route>
        
          {/* <Route path="*" element={()=> {return (<div>404!, PAGE NOT FOUND</div>)} } /> */}

        </Routes>
      </BrowserRouter>
          <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar />
    </div>
    // </Auth0ProviderWithHistory>
  );
}

export default App;
