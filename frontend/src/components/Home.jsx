import React from "react";
// import bg from "./bg.jpg";


const Home = () => {
  // const myStyle={backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh' }
  const myStyle={backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', width: '100%'}

  return (
    <div className="vh-100">
      <img src="images/bg.jpg" style={myStyle} alt="" />
    </div>

  );
};
export default Home;
