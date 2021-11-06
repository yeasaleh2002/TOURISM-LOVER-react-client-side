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
import PrivateRoute from './components/AllData/PrivateRoute/PrivateRoute';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
       <AuthProvider>

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

                  <PrivateRoute path="/singleService/:serviceId">
                    <SingleService></SingleService>
                  </PrivateRoute>

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

       </AuthProvider>
    </div>
  );
}

export default App;

