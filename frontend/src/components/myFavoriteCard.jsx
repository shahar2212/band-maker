import React from "react";
import { Link } from 'react-router-dom';//'Link'-uses for the main navbar link. 'NavLink'- is used for the other links and adds its own css styling. when uses link/navlink replace 'a' to- 'to'
import cardService from "../services/cardService";


const MyFavoriteCard = ({ card, userId }) => {

    return (
        <React.Fragment>

            <div className="col-lg-4 mt-3 mb-3"  >
                <div className="col-13">
                    <div className="col-md-11">
                        <div className="card-sl">
                            <div className="card-image">
                                <img

                                    src={card.bandImage}
                                    width="100%"
                                    height="260"
                                    alt={card.bandName}
                                />

                            </div>

                            <Link className=" card-action" to={`/favorites`} onClick={() => (cardService.removeFromFavorites(userId, card._id)).then(window.location = '/favorites')}><i className="far fa-trash-alt"></i></Link>
                            <div className="card-heading">
                                {card.bandName}
                            </div>
                            <div className="card-text">
                                {card.bandDescription}
                            </div>
                            <div className="card-text">
                                {card.bandAddress}
                            </div>
                            <Link to={`/my-bands/chat}`} className="card-button"><i className="fas fa-comments m-1"></i> Contact Us</Link></div>
                    </div>
                </div>
            </div >
        </React.Fragment>
    );
};

export default MyFavoriteCard;