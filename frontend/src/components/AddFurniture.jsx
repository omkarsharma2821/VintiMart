import React from 'react'

const AddFurniture = () => {
  return (
    <div className="container py-2">
    <header className="bg-dark w-75 rounded mx-auto">
      <div className='container py-3'>
          <h1 className="text-center mb-3 text-white fw-bold">
          Display Your Merchandise for Sale
          </h1>
          </div> 
          </header>
          {/* <div className="img"> */}
        <div className="d-flex justify-content-center img align-items-center vh-50">
          <div className="card w-75 col-6 col-md-6 ">
            <div className="p-5">
              <form>
                <label>User Name</label>
                <input
                  id="name"
                  type="text"
                  className="form-control mt-2 mb-4"
                  placeholder="Username"
                />
                <label>Email</label>
                <input
                  id="email"
                  type="email"
                  className="form-control mt-2 mb-4"
                  placeholder="Email"
                />
                <label>Contact No.</label>
                <input
                  id="mobile no."
                  type="tel"
                  className="form-control mt-2 mb-4"
                  placeholder="mobile no"
                />
                <input
                  id="password"
                  type="password"
                  className="form-control mt-2 mb-4"
                  placeholder="password"
                />
          
                <button
                  type="submit"
                  className="col-6 btn btn-danger w-50 mx-auto mt-5 d-flex justify-content-center"
                >
                  Add Furniture
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
        // </div>
      
  )
}

export default AddFurniture;