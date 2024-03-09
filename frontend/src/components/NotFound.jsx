import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="card container bg-light shadow-lg mt-5 w-50">
        <div className="mt- bg-light">
          <h1 className="text-muted text-center my-2">
            Oops! Something Went Wrong{" "}
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <img
            className="error"
            src="https://www.cloudconsult.ca/public/no-search-found.png"
            alt="PAGE NOT FOUND"
          />
        </div>
      </div>
    </>
  );
};

export default NotFound;
