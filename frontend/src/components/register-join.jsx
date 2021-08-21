import React from 'react';
import PageHeader from './common/page-header';
import Joi from 'joi-browser';//client side verify.
import Form from './common/form';
import { NavLink } from 'react-router-dom';
import http from '../services/httpService';
import { apiUrl } from '../config/config.json';
import { toast } from 'react-toastify';
import userService from '../services/userService';
import { Redirect } from 'react-router-dom';
//databases
import instruments from './js/instruments'
import area from './js/area';
//css and images
import bgc from '../images/register-join.jpg';
import './css/register-join.css';
//////////////////////////////////////////////////////
const bgci = bgc;//the image

class RegisterJoin extends Form { //gets all the abilitis of Form and Component, becouse Form extends Component.

    state = {
        data: { email: "", password: "", name: "", firstInstrument: "", secondInstrument: "", about: "", area: "" },
        errors: {}
    }

    //joi validation
    schema = {
        email: Joi.string().required().email().label('email'),
        password: Joi.string().required().min(6).label('password'),
        name: Joi.string().required().min(2).label('name'),
        firstInstrument: Joi.string().required(),
        secondInstrument: Joi.string().required(),
        about: Joi.string().required().min(10),
        area: Joi.required()
    };

    //what happens when clicking on submit
    doSubmit = async () => {
        const data = { ...this.state.data };
        data.band = false;

        try {
            await http.post(`${apiUrl}/users`, data);
            toast("Cool! your account has been created.");
            this.props.history.replace('sign-in');

        } catch (ex) {
            if (ex.response && ex.response.status === 400) {

                this.setState({ errors: { email: "Email is taken" } })
            }
        }
    }

    render() {

        if (userService.getCurrentUser()) return <Redirect to="/" /> //if already signed in, redirect to the home page


        return (
            <React.Fragment>
                <div className="shadow mb-5 bg-white container">
                    <img alt="bgci" id="background-image-join" src={bgci}></img>
                    <PageHeader>Register for joiners</PageHeader>

                    <div className="row">
                        <p className="fs-5">Join a band as fast as possible!</p>
                    </div>


                    <div className="row mb-2">
                        <div className="col-lg-12 mb-4">
                            <form onSubmit={this.handleSubmit} method="POST" autoComplete="off">
                                {this.renderInput('email', '* Email', 'email')}
                                {this.renderInput('password', '* Password', 'password')}
                                {this.renderInput('name', '* Name',)}
                                {this.renderSelect('firstInstrument', '* select your main instrument', instruments)}
                                {this.renderSelect('secondInstrument', 'select secondary instrument', instruments)}
                                {this.renderSelect('area', '* Select area', area)}
                                {this.renderTextArea('about', 'tell us about yourself')}
                                {this.renderButton('Register')}
                                <NavLink to="/register-create"><button className="btn btn-danger mt-3">Go to register-create</button></NavLink>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RegisterJoin;

