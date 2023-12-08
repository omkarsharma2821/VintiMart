import React from "react";
// import video from "../videoHome.mp4"


const Home = () => {
  return (
    <>
    <div id="main">
      <div id="page-1">
        <div className="cursor">
        </div>
      {/* <video className="videoBg" autoPlay muted loop src={video}></video> */}
      <div className="content vh-100">
        <nav className="help">
        </nav>
        <h1 className="homeMainFont">VintiMart</h1>
      </div>
    </div>
    </div>
    <div>
    <section>
  <div className="container py-5">
    <div className="row">
      <div className="col-md-3">
        <div className="card shadow ">
            <img
              className="img-fluid homeCardsImg"
              src="images/G.gif"
              alt=""
            />
            <button className="btn btn-primary mt-3 mx-4">Home Decor</button>
            <button className="btn btn-primary mt-3 mx-4">Buy Now</button>
            <h4 className="text-center mt-4" />
        </div>
      </div>
      <div className="col-md-3">
        <div className="card shadow">
            <img
              className="img-fluid homeCardsImg"
              src="images/G1.gif"
              alt=""
            />
            <button className="btn btn-primary mt-3 mx-4">Classical Chairs</button>
            <button className="btn btn-primary mt-3 mx-4">Buy Now</button>
            <h4 className="text-center mt-4" />
        </div>
      </div>
      <div className="col-md-3">
        <div className="card shadow">
            <img
              className="img-fluid homeCardsImg"
              src="images/G2.gif"
              alt=""
            />
            <button className="btn btn-primary mt-3 mx-4">Study Table</button>
            <button className="btn btn-primary mt-3 mx-4">Buy Now</button>
            <h4 className="text-center mt-4" />
        </div>
      </div>
      <div className="col-md-3">
        <div className="card shadow">
            <img
              className="img-fluid homeCardsImg"
              src="images/G3.gif"
              alt=""
            />
            <button className="btn btn-primary mt-3 mx-4">Modern Furniture</button>
            <button className="btn btn-primary mt-3 mx-4">Buy Now</button>
            <h4 className="text-center mt-4" />
        </div>
      </div>
    </div>
  </div>
</section>
    <section>
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
</section>
    </div>
    </>
  );
};
export default Home;
