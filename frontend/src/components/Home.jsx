import React from "react";
import video from "../videoBg.mp4"


const Home = () => {
  return (
    <>
      <div id="page-1">
      <video className="videoBg" autoPlay muted loop src={video}></video>
      <div className="content vh-100">
        <nav className="help">
        </nav>
        <h1 className="homeMainFont mb-5">VintiMart</h1>
      </div>
    </div> 
    <div>
      <div className="page2 d-flex justify-content-center align-items-center bg-light mt-0">
        <h1 className="display-1">Things make us unique</h1>
      </div>
    <section className="bg-light">
  <div className="container py-5">
    <div className="row">
      <div className="col-md-3">
        <div className="card shadow">
            <img
              className="img-fluid homeCardsImg"
              src="images/G.gif"
              alt=""
            />
            <h5 className="text-center mt-1 mx-4">Modern Furniture</h5>
            <button className="btn btn-primary mt-1 mx-4 mb-3">Visit Store</button>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card shadow">
            <img
              className="img-fluid homeCardsImg"
              src="images/G1.gif"
              alt=""
            />
            <h5 className="text-center mt-1 mx-4">Satisfied Customer</h5>
            <button className="btn btn-primary mt-1 mx-4 mb-3">Visit Store</button>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card shadow">
            <video autoPlay loop muted
              className="homeCardsImg vdo"
              src="images/G2.mp4"
              alt=""
            />
            <h5 className="text-center mt-1 mx-4"> Customer support</h5>
            <h5 className="btn btn-primary mt-1 mx-4 mb-4">Visit Store</h5>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card shadow">
            <img
              className="img-fluid homeCardsImg"
              src="images/G3.gif"
              alt=""
            />
            <h5 className="text-center mt-1 mx-4">Home Decor</h5>
            <button className="btn btn-primary mt-1 mx-4 mb-3">Visit Store</button>
        </div>
      </div>
    </div>
  </div>
</section>
    {/* <section>
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <div className="card">
            <img
              className="img-fluid homeCardsImg"
              src="images/G.gif"
              alt=""
            />
            <button className="btn btn-primary mt-3 mx-4">Add to Cart</button>
            <button className="btn btn-primary mt-3 mx-4">Buy Now</button>
            <h4 className="text-center mt-4" />
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
            <img
              className="img-fluid homeCardsImg"
              src="images/G1.gif"
              alt=""
            />
            <button className="btn btn-primary mt-3 mx-4">Add to Cart</button>
            <button className="btn btn-primary mt-3 mx-4">Buy Now</button>
            <h4 className="text-center mt-4" />
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
            <img
              className="img-fluid homeCardsImg"
              src="images/G2.gif"
              alt=""
            />
            <button className="btn btn-primary mt-3 mx-4">Add to Cart</button>
            <button className="btn btn-primary mt-3 mx-4">Buy Now</button>
            <h4 className="text-center mt-4" />
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
            <img
              className="img-fluid homeCardsImg"
              src="images/G3.gif"
              alt=""
            />
            <button className="btn btn-primary mt-3 mx-4">Add to Cart</button>
            <button className="btn btn-primary mt-3 mx-4">Buy Now</button>
            <h4 className="text-center mt-4" />
        </div>
      </div>
    </div>
  </div>
</section> */}
    </div>
    </>
  );
};
export default Home;
