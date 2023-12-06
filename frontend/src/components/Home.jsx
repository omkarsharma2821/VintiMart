import React from "react";
// import homebg from "./homebg.png";


const Home = () => {
  // const myStyle={backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }
  // const myStyle={backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', width: '100%'}

  return (
    <>
    <div className="vh-100 home-bg">
      {/* <img src={require('./homebg.png')} alt="" /> */}
    </div>
    <div>
    <section>
  <div className="container py-5">
    <div className="row">
      <div className="col-md-3">
        <div className="card">
            <img
              className="img-fluid"
              src="images/G.gif"
              alt=""
            />
            <button className="btn btn-primary mt-3 mx-4">Home Decor</button>
            <button className="btn btn-primary mt-3 mx-4">Buy Now</button>
            <h4 className="text-center mt-4" />
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
            <img
              className="img-fluid"
              src="images/G1.gif"
              alt=""
            />
            <button className="btn btn-primary mt-3 mx-4">Classical Chairs</button>
            <button className="btn btn-primary mt-3 mx-4">Buy Now</button>
            <h4 className="text-center mt-4" />
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
            <img
              className="img-fluid"
              src="images/G2.gif"
              alt=""
            />
            <button className="btn btn-primary mt-3 mx-4">Study Table</button>
            <button className="btn btn-primary mt-3 mx-4">Buy Now</button>
            <h4 className="text-center mt-4" />
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
            <img
              className="img-fluid"
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
              className="img-fluid"
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
              className="img-fluid"
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
              className="img-fluid"
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
              className="img-fluid"
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
