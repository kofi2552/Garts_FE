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
// import  Modal  from "./components/Modal/Modal";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandMain />}>
            <Route index element={<Landing />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/add-project" element={<AddProject />} />
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
          <Route path="/checkout" element={<Checkout />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
