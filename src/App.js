import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Purchase/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddaReview from './Pages/Dashboard/AddaReview';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import Payment from './Pages/Dashboard/Payment';
import NotFound from './Pages/Shared/NotFound';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import MyProfile from './Pages/Dashboard/MyProfile';
import auth from './firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import useAdmin from './hooks/useAdmin';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import AddProduct from './Pages/Dashboard/AddProduct';

function App() {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className='px-12 mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="purchase/:id" element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>} />

        <Route path="dashboard" element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>} >


          {
            !admin && <Route index element={<MyOrders></MyOrders>}></Route>
          }
          {
            admin && <Route index  element={<RequireAdmin>
              <Users></Users>
            </RequireAdmin>}></Route>
          }

          {/* <Route index element={<MyOrders></MyOrders>}></Route> */}
          <Route path='addareview' element={<AddaReview></AddaReview>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>

          <Route path='payment/:id' element={<Payment></Payment>}></Route>

          <Route path='manageorders' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='manageproducts' element={<ManageProducts></ManageProducts>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>



        </Route>

        <Route path="my-portfolio" element={<MyPortfolio></MyPortfolio>} />
        <Route path="blogs" element={<Blogs></Blogs>} />
        {/* <Route path="about" element={<About />} /> */}
        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<SignUp></SignUp>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
