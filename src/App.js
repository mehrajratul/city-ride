import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Map from './Components/Map/Map';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import AuthProvider from './context/AuthProvider'
function App() {
  return (
    <div style={{backgroundImage:`url("https://ibb.co/p2kQ7xm")`}} className="App">
      <AuthProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path='/register'>
                <Register></Register>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute path="/contact">
                <Contact />
              </PrivateRoute>
              <PrivateRoute path="/blog">
                <Blog></Blog>
              </PrivateRoute>
              <PrivateRoute path="/map">
                <Map></Map>
              </PrivateRoute>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
