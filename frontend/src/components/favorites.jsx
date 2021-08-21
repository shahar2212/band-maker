import React, { Component } from 'react';
import PageHeader from './common/page-header';
import cardService from '../services/cardService';
import { Link } from 'react-router-dom';//'Link'-uses for the main navbar link. 'NavLink'- is used for the other links and adds its own css styling. when uses link/navlink replace 'a' to- 'to'
import MyFavoriteCard from './myFavoriteCard';

class MyBands extends Component {
    state = {
        cards: [],
        userId: '',
    }

    async componentDidMount() {
        let userId = localStorage.getItem('user_id');

        const { data } = await cardService.showFavorites(userId);
        if (data.length > 0) this.setState({ cards: data, userId: userId });
    }

    render() {

        const { cards } = this.state;

        return (
            <div className="container">
                <PageHeader>My favorite bands page</PageHeader>
                <div className="row">
                    <div className="col-12">
                        <p><Link className="btn btn-primary mt-3" to="/discover">+ Discover more bands</Link></p>
                        {cards.length > 0 && <p>Your favorites Bands in the list below</p>}
                    </div>
                </div>
                <div className="row">
                    {cards.length > 0 &&
                        cards.map(card => <MyFavoriteCard card={card} userId={this.state.userId} key={card._id} />)
                    }
                </div>
            </div >
        );
    }
}

export default MyBands;