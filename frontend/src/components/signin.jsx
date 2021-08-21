import React from 'react';
import PageHeader from './common/page-header';
import Joi from 'joi-browser';//client side verify.
import Form from './common/form';
import { Link } from 'react-router-dom';
import userService from '../services/userService';
import { Redirect } from 'react-router-dom';


class Signin extends Form {
    state = {
        data: { email: "", password: "" },
        errors: {}
    }

    //joi validation
    schema = {
        email: Joi.string().required().email().label('email'),
        password: Joi.string().required().min(6).label('password'),
    };

    doSubmit = async () => {
        const { email, password } = this.state.data;
        try {
            await userService.login(email, password);
            window.location = '/'; //relocation to home page, and render App component
        } catch (ex) {
            if (ex.response && ex.response.status === 400) {
                this.setState({ errors: { email: ex.response.data } });
            }
        }
    }


    render() {

        if (userService.getCurrentUser()) return <Redirect to="/" /> //if already signed in, redirect to the home page

        return (
            <React.Fragment>
                <div className="container  shadow p-3 mb-5 bg-white rounded">
                    <div className="container text-center">
                        <PageHeader>Sign In!</PageHeader>
                        <div className="row">
                            <p className="fs-5">Join a band as fast as possible!</p>
                            <p>dont have an account? <Link to="/register-type">register</Link> </p>
                        </div>
                    </div>

                    <div className="container-fluid row d-flex justify-content-center">
                        <div className="col-lg-8">
                            <form onSubmit={this.handleSubmit} method="POST" autoComplete="off" className="text-center">
                                {this.renderInput('email', '* Email', 'email')}
                                {this.renderInput('password', '* Password', 'password')}
                                {this.renderButton('Sign-in')}
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Signin;