import React from "react";
// import homebg from "./homebg.png";
import video from "../videoHome.mp4"


const Home = () => {
  // const myStyle={backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }
  // const myStyle={backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', width: '100%'}

  // var page1Content = document.querySelector
  // (".content")
  // var cursorr = document.querySelector(".cursor")

  // page1Content.addEventListener("mousemove", function(dets){
  //   gsap.to(cursorr,{
  //     x:dets.x,
  //     y:dets.y
  //   })
  // })
  // page1Content.addEventListener("mouseenter",function(){
  //   gsap.to(cursorr,{
  //     scale:1,
  //     opacity:1
  //   })
  // })
  // page1Content.addEventListener("mouseleave",function(){
  //   gsap.to(cursorr,{
  //     scale:0,
  //     opacity:10
  //   })
  // })



  return (
    <>
    <div id="main">
      <div id="page-1">
        <div className="cursor">
        </div>
      <video className="videoBg" autoPlay muted loop src={video}></video>
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
