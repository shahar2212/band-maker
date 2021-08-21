import React, { Component } from 'react';
import PageHeader from './common/page-header';
import MyCard from './myCard';
import cardService from '../services/cardService';
import { Link } from 'react-router-dom';//'Link'-uses for the main navbar link. 'NavLink'- is used for the other links and adds its own css styling. when uses link/navlink replace 'a' to- 'to'


class MyBands extends Component {
    state = {
        cards: []
    }

    async componentDidMount() {
        const { data } = await cardService.getMyCards();
        if (data.length > 0) this.setState({ cards: data });
    }

    render() {

        const { cards } = this.state;

        return (
            <div className="container">
                <PageHeader>My bands page</PageHeader>
                <div className="row">
                    <div className="col-12">
                        <p><Link className="btn btn-primary mt-3" to="/create-card">+ Add Band</Link></p>
                        {cards.length > 0 && <p>Your cards in the list below</p>}
                    </div>
                </div>
                <div className="row">
                    {cards.length > 0 &&
                        cards.map(card => <MyCard card={card} key={card._id} />)
                    }

                </div>
            </div >
        );
    }
}

export default MyBands;