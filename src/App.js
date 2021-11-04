import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/AllData/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import { Route, Switch } from 'react-router';
import Contact from './components/AllData/Contact/Contact';
import About from './components/AllData/About/About';
import Blog from './components/AllData/Blogs/Blog';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Shared/Header/Header';
import NotFound from './components/AllData/NotFound/NotFound';
import Gallery from './components/AllData/Gallery/Gallery';
import Login from './components/AllData/LoginAndRegistation/Login/Login';
import Register from './components/AllData/LoginAndRegistation/Register/Register';
import MyOrder from './components/AllData/LoginUsersData/MyOrder/MyOrder';
import AddService from './components/AllData/LoginUsersData/AddService/AddService';
import ManageAllOrders from './components/AllData/LoginUsersData/ManageAllOrders/ManageAllOrders';
import SingleService from './components/AllData/ServicesCompontent/SingleService/SingleService';
import Services from './components/AllData/ServicesCompontent/Services/Services';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
 
 <Header></Header>
  
   <Switch>

      <Route exact path="/">
        <Home></Home>
      </Route>

      <Route path="/home">
        <Home></Home>
      </Route>

      <Route path="/services">
        <Services></Services>
      </Route>

      <Route path="/singleService/:serviceId">
        <SingleService></SingleService>
      </Route>

      <Route path="/gallery">
        <Gallery></Gallery>
      </Route>

      <Route path="/blogs">
        <Blog></Blog>
      </Route>
     
      <Route path="/about">
        <About></About>
      </Route>

      <Route path="/contact">
        <Contact></Contact>
      </Route>

      <Route path="/myOrder">
        <MyOrder></MyOrder>
      </Route>

      <Route path="/addService">
        <AddService></AddService>
      </Route>

      <Route path="/manageAllOrder">
        <ManageAllOrders></ManageAllOrders>
      </Route>

       <Route path="/login">
        <Login></Login>
      </Route>

     <Route path="/register">
        <Register></Register>
      </Route>

      <Route path="*">
        <NotFound></NotFound>
      </Route>

   </Switch>

<Footer></Footer>

 </BrowserRouter>
    </div>
  );
}

export default App;



/* 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFnSLtlHDpObpwTVDoKMGr6IZRluQbf0Y",
  authDomain: "tourism-lover.firebaseapp.com",
  projectId: "tourism-lover",
  storageBucket: "tourism-lover.appspot.com",
  messagingSenderId: "216340221718",
  appId: "1:216340221718:web:4fc07ce5121af27ef38a37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


*/