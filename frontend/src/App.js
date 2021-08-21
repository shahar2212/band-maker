import React, { Component } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Switch, Route } from 'react-router-dom'; //controlls the movements of the website
import '@fortawesome/fontawesome-free';
//components
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import RegisterJoin from './components/register-join.jsx';
import RegisterCreate from './components/register-create';
import Signin from './components/signin';
import RegisterType from './components/register-type';
import userService from './services/userService';
import Logout from './components/logout';
import CreateCard from './components/create-card';
import EditCard from './components/edit-card';
import ProtectedRoute from './components/common/protectedRoutes';
import MyBands from './components/my-bands';
import Discover from './components/discover';
import Favorites from './components/favorites';

class App extends Component {

  state = {};

  //when component starts running, getCurrentUser() starts running, and stores the user details in the state.
  componentDidMount() {
    const user = userService.getCurrentUser();
    this.setState({ user: user });
  }

  render() {

    const { user } = this.state;

    return (


      <div className="App" >

        <header>
          <ToastContainer />
          <Navbar user={user} />
        </header>
        <main style={{ minHeight: 900 }}>
          <Switch>
            <ProtectedRoute path="/my-bands/edit/:id" component={EditCard} band={true} user={user} />
            <ProtectedRoute path="/my-bands" component={MyBands} band={true} user={user} />
            <ProtectedRoute path="/create-card" component={CreateCard} band={true} user={user} />
            <ProtectedRoute path="/favorites" component={Favorites} user={user} />

            <Route path="/logout" component={Logout} />
            <Route path="/sign-in" component={Signin} />
            <Route path="/register-type" component={RegisterType} />
            <Route path="/register-join" component={RegisterJoin} />
            <Route path="/register-create" component={RegisterCreate} />
            <Route path="/about" component={About} />
            <Route path="/" exact component={Home} />
            <Route path="/discover" exact component={Discover} />
            <Route path="/favorites" exact component={Favorites} />

          </Switch>
        </main>
        <footer><Footer /></footer>
      </div>
    );
  }
}

export default App;
