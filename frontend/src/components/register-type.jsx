import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './css/register-type.css';
import userService from '../services/userService';
import { Redirect } from 'react-router-dom';
import PageHeader from './common/page-header';



class RegisterType extends Component {
    state = {}
    render() {



        if (userService.getCurrentUser()) return <Redirect to="/" /> //if already signed in, redirect to the home page


        return (

            <div className="container shadow bg-white rounded text-center" id="popup-container">
                <PageHeader>Choose registration type</PageHeader>
                <div className="container">
                    <div id="popup" className="col-12 text-center">
                        <br />
                        <NavLink to="/register-create"><button className="btn btn-danger mt-4 m-2">Register you'r band</button></NavLink>
                        <NavLink to="/register-join"><button className="btn btn-danger mt-4 m-2">Join a band</button></NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterType;