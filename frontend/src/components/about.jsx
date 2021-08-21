import React, { Component } from 'react';
import PageHeader from './common/page-header';

class About extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>

                <div className="container shadow p-3 mb-5 bg-white rounded">
                    <div className="container">
                        <PageHeader>About Gang-Band</PageHeader>
                    </div>

                    <div className="shadow-lg p-3 mt-5" id="what-container">
                        <div id="what" className="bg-light d-flex flex-row mt-4 shadow-lg p-5">

                            <div>
                                <h2 className="mt-5">So...what do we do?</h2>
                                <p>
                                    We are striving to connect musicians who dosent have an music environment and break that barrier, so that <b>anyone, anywhere</b> could join a band, <br />
                                    and any band, could easily find a suitable instrumentalist/singer if needed.
                                </p>
                            </div>

                            <div className="d-flex flex-row">
                                <img id="about-img" src="https://cdn.pixabay.com/photo/2016/03/31/23/46/aural-1297838_960_720.png" alt=""
                                    height="200"
                                />

                            </div>
                        </div>

                    </div>
                    <br />


                    <div className="d-flex justify-content-center shadow-lg p-3" id="how-container">
                        <div id="how" className="bg-light d-flex flex-row-reverse shadow-lg p-5">
                            <div className="d-flex flex-row">
                                <img id="about-img" src=" https://cdn.pixabay.com/photo/2012/04/01/19/05/note-24074_960_720.png" alt=""
                                    height="200"
                                />
                            </div>
                            <div className="pr-3 ">
                                <h2 className="mt-5 p-1">how do we do it?</h2>
                                <p>We built an algoritem that finds your future band, and connect you as quickly as possible, and this algoritem also find your band a suitable instrumentalist/singer. </p>

                            </div>
                        </div>
                    </div>
                    <br />

                    <div className="d-flex justify-content-end shadow-lg p-3" id="start-container">
                        <div id="how" className="bg-light d-flex flex-row-reverse shadow-lg p-5">
                            <div className="d-flex flex-row">
                                <img id="about-img" src="https://cdn.pixabay.com/photo/2012/04/05/01/36/music-25705_960_720.png" alt=""
                                    height="200"
                                />
                            </div>
                            <div className="pr-3 ">
                                <h2 className="mt-5 p-1">how do you start?</h2>
                                <p>easy! just register and start fill the details </p>
                            </div>
                        </div>
                    </div>
                    <br />


                    <div className="d-flex justify-content-center shadow-lg p-3 " id="want-join">
                        <div id="how" className="bg-light d-flex flex-row-reverse shadow-lg p-5">
                            <div className="d-flex flex-row">
                                <img id="about-img" src="https://cdn.pixabay.com/photo/2012/04/01/19/05/note-24074_960_720.png" alt=""
                                    height="200"
                                />

                            </div>
                            <div className="pr-3 ">
                                <h2 className="mt-5 p-1">Want to Register as Band?</h2>
                                <p> if you finished your registration as a 'Band', you will have to fill a card about your band and needs, and the card will be published for all to see </p>
                            </div>
                        </div>

                    </div>
                    <br />
                    <div className="shadow-lg p-3 mb-4" id="want-band">
                        <div id="start" className="bg-light d-flex flex-row shadow-lg p-5">

                            <div>
                                <h2 className="mt-5 ml-2">Want to Join a band?</h2>
                                <p>
                                    fill up the registration form, and then the algoritem will start running, you will have to go to 'discover' page and look at the options we gave you, and soon enough you will become a part of a band! </p>
                            </div>
                            <div className="d-flex flex-row">
                                <img id="about-img" src="https://cdn.pixabay.com/photo/2016/03/31/23/46/aural-1297838_960_720.png" alt=""
                                    height="200"
                                />

                            </div>
                        </div>
                    </div>
                </div>


            </React.Fragment >
        );
    }
}

export default About