import React, { Component } from 'react';
import PageHeader from './common/page-header';

class Home extends Component {
  state = {}

  render() {
    return (
      <React.Fragment>

        <div className="container">
          <PageHeader>Gang-Band Home Page </PageHeader>

          <div className="row">
            <div className="col-12 ">
              <p>Welcome to Band-Maker! here you will be able to create a band or join one!</p>
            </div>
          </div>
        </div>
        <div>


          <div className="shadow-lg p-3 d-flex flex-row">
            <div id="connect" className="bg-light d-flex flex-row mt-4 shadow-lg">
              <img src="https://cdn.pixabay.com/photo/2016/11/26/01/11/plug-1859827_960_720.jpg" alt="" id="connect-image" />
              <div>
                <h2 className="mt-5">Connect</h2>
                <p>
                  We are striving to connect musicians who dosent have an music environment and break that barrier, so that <b>anyone, anywhere</b> could join a band, <br />
                </p>
              </div>
            </div>
          </div>
          <br />


          <div className="d-flex justify-content-end shadow-lg p-3">
            <div id="create" className="bg-light d-flex flex-row-reverse shadow-lg p-3">
              <img src="https://cdn.pixabay.com/photo/2020/05/01/14/15/music-sheet-5117328_960_720.jpg" alt="" id="connect-image" />
              <div>                <h2 className="mt-5 p-1">Create</h2>
                <p className="pr-3">
                  We are striving to connect musicians who dosent have an music environment and break that barrier, so that <b>anyone, anywhere</b> could join a band, <br />

                </p>
              </div>
            </div>
          </div>
          <br />

          <div className="shadow-lg p-3">
            <div id="play" className="bg-light d-flex flex-row shadow-lg">
              <img src="https://cdn.pixabay.com/photo/2015/03/26/09/55/musicians-690591_960_720.jpg" alt="" id="connect-image" />
              <div>
                <h2 className="mt-5 ml-2">Play</h2>
                <p>
                  We are striving to connect musicians who dosent have an music environment and break that barrier, so that <b>anyone, anywhere</b> could join a band, <br />
                </p>
              </div>
            </div>
          </div>
        </div>


        <br /><br /><br />
        <div className="container mw-100 mt-4" id="success-stories-container-2">
          <h2 className='text-center mb-5 pt-2'>Latest success stories</h2>
          <div className="container">
            <div className="carousel-inner py-4">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card shadow p-3 rounded mb-5 bg-light ">
                        <img id="success-bands"
                          src="http://dizofyq6y2cqx.cloudfront.net/karnivool/images/51ba852bf1cb5.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Karnivool</h5>
                          <p className="card-text bg-light">
                            Successors of progresive metal.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 d-none d-lg-block">
                      <div className="card shadow p-3 mb-5 bg-dark rounded text-danger">
                        <img id="success-bands"
                          src="https://i2.wp.com/yuvalerel.com/wp-content/uploads/2021/05/SymphonyX2015a.jpg?resize=780%2C470&ssl=1"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title ">Symphony X</h5>
                          <p className="card-text bg-dark text-danger">
                            proggresive power metal band.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 d-none d-lg-block">
                      <div className="card shadow p-3 rounded mb-5 bg-light ">
                        <img id="success-bands"
                          src="https://www.nuclearblast.de/en/data/bands/nightwish/bandfotos/_mg_8010.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body bg-light">
                          <h5 className="card-title">Nightwish</h5>
                          <p className="card-text bg-light">
                            Less epic then them.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        <div className="container mw-100 mt-4" id="success-stories-container">
          <div className="container">
            <div className="carousel-inner py-4">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="card shadow p-3 rounded mb-5 bg-dark text-danger ">
                        <img id="success-bands"
                          src="https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JM_ArticleMainImageFaceDetect/443661"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Dream Theater</h5>
                          <p className="card-text bg-dark text-danger">
                            founders of progresive metal.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 d-none d-lg-block">
                      <div className="card shadow p-3 rounded mb-5 bg-light ">
                        <img id="success-bands"
                          src="https://pyxis.nymag.com/v1/imgs/8ee/9b2/daf79f1b992e86ab665acbbef7f7082c71-13-one-direction-friends.2x.rsocial.w600.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title ">one direction</h5>
                          <p className="card-text bg-light">
                            why not?
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 d-none d-lg-block ">
                      <div className="card shadow p-3 rounded mb-5 bg-dark text-danger">
                        <img id="success-bands"
                          src="https://m.media-amazon.com/images/I/51PQxIgUeXL._SL1000_.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title">Epica</h5>
                          <p className="card-text bg-dark text-danger">
                            them.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;