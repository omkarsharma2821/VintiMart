import React from "react";
import video from "../videoBg.mp4";

const Home = () => {
  return (
    <>
      <div id="page-1">
        <video className="videoBg" autoPlay muted loop src={video}></video>
        <div className="content vh-100">
          <nav className="help"></nav>
          <h1
            className="homeMainFont mb-5"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            VintiMart
          </h1>
        </div>
      </div>
      <div>
        <div className="page2 d-flex justify-content-center align-items-center bg-light mt-0">
          <h1 className="display-2 text-center">Things make us unique</h1>
        </div>
        <section className="bg-light">
          <div className="container py-0">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-3 mb-5">
                <div className="card shadow cards-home">
                  <img
                    className="img-fluid homeCardsImg"
                    src="images/G.gif"
                    alt="Modern Furniture"
                  />
                  <h5 className="text-center mt-1 mx-4">Modern Furniture</h5>
                  <a
                    href="/browsefurniture"
                    className="d-flex justify-content-center"
                  >
                    <button className="btn btn-primary mt-1 mx-4 mb-3 w-75">
                      Visit Store
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 mb-5">
                <div className="card shadow cards-home">
                  <img
                    className="img-fluid homeCardsImg"
                    src="images/G1.gif"
                    alt="Satisfied Customer"
                  />
                  <h5 className="text-center mt-1 mx-4">Satisfied Customer</h5>
                  <a
                    href="/browsefurniture"
                    className="d-flex justify-content-center"
                  >
                    <button className="btn btn-primary mt-1 mx-4 mb-3 w-75">
                      Visit Store
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 mb-5">
                <div className="card shadow cards-home">
                  <img
                    className="img-fluid homeCardsImg"
                    src="images/G.gif"
                    alt="Customer Support"
                  />
                  <h5 className="text-center mt-1 mx-4">Customer Support</h5>
                  <a
                    href="/browsefurniture"
                    className="d-flex justify-content-center"
                  >
                    <button className="btn btn-primary mt-1 mx-4 mb-3 w-75">
                      Visit Store
                    </button>
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3 mb-5">
                <div className="card shadow cards-home">
                  <img
                    className="img-fluid homeCardsImg"
                    src="images/G3.gif"
                    alt="Home Decor"
                  />
                  <h5 className="text-center mt-1 mx-4">Home Decor</h5>
                  <a
                    href="/browsefurniture"
                    className="d-flex justify-content-center"
                  >
                    <button className="btn btn-primary mt-1 mx-4 mb-3 w-75">
                      Visit Store
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Home;
