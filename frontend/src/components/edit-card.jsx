import React from "react";
import PageHeader from "./common/page-header";
import Joi from "joi-browser";
import Form from "./common/form";
import cardService from "../services/cardService";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

class EditCard extends Form {
    state = {
        data: {
            bandName: "", bandDescription: "", bandAddress: "", bandPhone: "", bandImage: ""
        },
        errors: {}
    };

    schema = {
        _id: Joi.string(),
        bandName: Joi.string().min(2).max(255).required(),
        bandDescription: Joi.string().min(2).max(1024).required(),
        bandAddress: Joi.string().min(2).max(400).required(),
        bandPhone: Joi.string().min(9).max(10).required().regex(/^0[2-9]\d{7,8}$/),
        bandImage: Joi.string().min(11).max(1024).uri().allow("")
    };

    async componentDidMount() {
        const cardId = this.props.match.params.id;
        const { data } = await cardService.getCard(cardId);
        this.setState({ data: this.mapToViewModel(data) })
    }

    mapToViewModel(card) {
        return {
            bandName: card.bandName,
            bandDescription: card.bandDescription,
            bandAddress: card.bandAddress,
            bandPhone: card.bandPhone,
            bandImage: card.bandImage,
            _id: card._id
        }
    }

    doSubmit = async () => {

        const { data } = this.state;
        await cardService.editCard(data);
        toast('Band is updated');
        this.props.history.replace('/my-bands');

    };


    render() {
        return (
            <div className="container">
                <PageHeader titleText="Edit Band Form" />
                <div className="row">
                    <div className="col-12">
                        <p>Edit band card</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
                            {this.renderInput("bandName", "Band Name")}
                            {this.renderInput("bandDescription", "Band Description")}
                            {this.renderInput("bandAddress", "Band Address")}
                            {this.renderInput("bandPhone", "Band Phone")}
                            {this.renderInput("bandImage", "Band Image")}
                            {this.renderButton("Create Card")}
                            <Link className="btn btn-secondary mt-3" to="/my-bands">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditCard;