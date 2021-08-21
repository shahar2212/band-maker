import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';//'Link'-uses for the main navbar link. 'NavLink'- is used for the other links and adds its own css styling. when uses link/navlink replace 'a' to- 'to'
import './css/navbar.css'
import userService from '../services/userService';
import logoo from '../images/logo.png';
const logo = logoo;

class Navbar extends Component {
    state = {
        users: []
    }

    async componentDidMount() {
        const { data } = await userService.me();
        this.setState({ users: data });

        localStorage.setItem('user_id', this.state.users._id);
    }

    render() {

        const { user } = this.props;

        return (

            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container fs-5 ">

                    <Link className="navbar-brand me-5 text-dark" to="/"><img alt="logo" style={{ width: 60, height: 60 }} src={logo}></img> Band-Maker |</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
                            </li>
                            {user && user.band &&
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/my-bands">My Bands</NavLink>
                                </li>
                            }
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/discover">Discover-Bands</NavLink>
                            </li>
                            {user &&
                                <li className="nav-item">
                                    <NavLink className="nav-link active" aria-current="page" to="/chat">chat <span className="badge bg-danger">4</span></NavLink>
                                </li>
                            }
                            {user &&
                                <li className="nav-item position-relative">
                                    <NavLink className="nav-link active" aria-current="page" to="/favorites">favorites
                                        <span className="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-danger">
                                            3
                                            <span className="visually-hidden">favorites</span>
                                        </span>
                                    </NavLink>
                                </li>

                            }
                        </ul>


                        <div className="row">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                {!user && (
                                    <React.Fragment>
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" to="/sign-in">Sign-in</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" to="/register-type">Register</NavLink>
                                        </li>
                                    </React.Fragment>
                                )}

                                {user && (
                                    <React.Fragment>
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" to="/edit-user">Hello {this.state.users.name}!</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" to="/logout">Logout</NavLink>
                                        </li>
                                    </React.Fragment>
                                )}

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;