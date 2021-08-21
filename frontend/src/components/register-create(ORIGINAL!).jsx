import React from 'react';
import PageHeader from './common/page-header';
import Joi from 'joi-browser';//client side verify.
import Form from './common/form';
import { NavLink } from 'react-router-dom';
import userService from '../services/userService';
import { Redirect } from 'react-router-dom';
//css and images
import './css/register-create.css'
import bgc from '../images/register-createjpg.jpg'
//databases:
import instruments from './js/instruments';
import area from './js/area';

const bgci = bgc; //the imported image.

class RegisterCreate extends Form { //gets all the abilities of Form and Component, becouse Form extends Component.

    state = {
        data: { email: "", password: "", name: "", firstInstrumentPicker: "", secondInstrumentPicker: "", about: "", area: '' },
        errors: {}
    }

    //joi validation.
    schema = {
        email: Joi.string().required().email().label('email'),
        password: Joi.string().required().min(6).label('password'),
        name: Joi.string().required().min(2).label('name'),
        firstInstrumentPicker: Joi.string().required(),
        secondInstrumentPicker: Joi.string().required(),
        about: Joi.string().required().min(10),
        area: Joi.required()
    };
    //what happens when we press submit.
    doSubmit = () => {
        console.log(this.state.data);
    }

    render() {

        if (userService.getCurrentUser()) return <Redirect to="/" /> //if already signed in, redirect to the home page


        return (
            <React.Fragment>
                <img alt="bgci" id="background-image-create" src={bgci}></img>

                <div className="container">
                    <PageHeader>Register for creators</PageHeader>
                    <div className="row">
                        <p className="fs-5">Create/Upgrade you'r band as fast as possible!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <form onSubmit={this.handleSubmit} method="POST" autoComplete="off">
                            {this.renderInput('email', '* Email', 'email')}
                            {this.renderInput('password', '* Password', 'password')}
                            {this.renderInput('name', '* Name/Band-Name',)}
                            {this.renderSelect('firstInstrumentPicker', '* Select needed instrument', instruments)}
                            {this.renderSelect('secondInstrumentPicker', 'Select second instrument', instruments)}
                            {this.renderSelect('area', '* Select area', area)}
                            {this.renderTextArea('about', 'tell us about your band')}
                            {this.renderButton('Register')}
                            <NavLink to="/register-join"><button className="btn btn-danger mt-3">Go to register-Join</button></NavLink>
                        </form>
                    </div>
                </div >
            </React.Fragment>

        );
    }
}

export default RegisterCreate;

