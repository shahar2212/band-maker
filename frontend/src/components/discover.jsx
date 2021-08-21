import React, { Component } from 'react';
import PageHeader from './common/page-header';
import DiscoverCard from './discoverCard';
import cardService from '../services/cardService';
import { Link } from 'react-router-dom';//'Link'-uses for the main navbar link. 'NavLink'- is used for the other links and adds its own css styling. when uses link/navlink replace 'a' to- 'to'


class Discover extends Component {
    state = {
        cards: [],
        user_id: '',
        searchTerm: '',
    }

    async componentDidMount() {
        let favoritesUserId = localStorage.getItem('user_id');

        const { data } = await cardService.getAllCards();
        if (data.length > 0) this.setState({ cards: data, user_id: favoritesUserId });
    }

    render() {

        const { cards } = this.state;
        return (
            <React.Fragment>
                <div className="container shadow p-3 mb-5 bg-white rounded">
                    <PageHeader>Discover and Connect</PageHeader>

                    <div className="row">
                        <div className="col-12">
                            <p><Link className="btn btn-primary mt-3" to="/create-card">+ Add Band</Link></p>
                            {cards.length > 0 && <p>discover bands and connect </p>}
                        </div>
                    </div>

                    <div className="row p-5 ">
                        <label id="search-bar" htmlFor="search-bar"></label>
                        <input id="search-posts-field" type="text" className="form-control form-control-lg mb-5" placeholder="Search"
                            onChange={event => { this.setState({ searchTerm: event.target.value }); }} />

                        {cards.filter((val) => {
                            if (this.state.searchTerm === '') {
                                return val
                            } else if (val.bandName.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {
                                return val
                            }
                        }).map(card => <DiscoverCard card={card} user_id={this.state.user_id} key={card._id} />)}
                    </div>


                    <div className="container d-flex justify-content-center  ">
                        <nav aria-label="...">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <span className="page-link">Previous</span>
                                </li>
                                <li className="page-item active"><p className="page-link" >1</p></li>
                                <li className="page-item" aria-current="page">
                                    <span className="page-link">2</span>
                                </li>
                                <li className="page-item"><p className="page-link" >3</p></li>
                                <li className="page-item">
                                    <p className="page-link" >Next</p>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div >


            </React.Fragment>
        );
    }
}

export default Discover;