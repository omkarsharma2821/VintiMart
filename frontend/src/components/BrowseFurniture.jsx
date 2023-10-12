import React, { useState } from 'react'
import productData from "./DummyData"
import useCartContext from '../CartContext';

const BrowseFurniture = () => {

  const [productsArray, setProductsArray] = useState(productData);

  const {addItemToCart} = useCartContext();

  const brands = ["pepperfry", "urban ladder", "godrej", "durian","wood mount", "royal oak","zuari", "damro"];
  const searchProduct = (e) => {
    const search = e.target.value;
    let filteredData = productData.filter((product) => {
      return product.model.toLowerCase().includes(search.toLowerCase());
    });
    setProductsArray(filteredData);
  };
  const filterBrand = (e) => {
    const search = e.target.value;
    let filteredData = productData.filter((product) => {
      return product.brand === search;
    });
    setProductsArray(filteredData);
  };
  return (
    <div>
      <header className="bg-dark">
        <div className="container py-3">
          <h1 className="text-center display-3 mb-0 text-white fw-bold">
          Discover Your Style
          </h1>
            <h5 className='text-white text-center mb-4 '>Home Decor for Sale - Where Comfort Meets Elegance</h5>
            <div className='d-flex'>
          <input
            type="text"
            className='form-control w-75 m-auto'
            onChange={searchProduct}
            placeholder='Search in VintiMart....'
          />
            {/* <button><i class="fa-solid fa-magnifying-glass"></i></button> */}
            </div>
        </div>
      </header>
      <div className="row mt-4">
        <div className="col-3">
          <div className="card">
            <div className="card-body">
              <h6 className='text-muted text-center'>Apply Filter</h6>
              <hr />

              <select className="form-control" onChange={filterBrand}>
                <option className='text-center' value="">Select Brand</option>
                {brands.map((b) => (
                  <option value={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="conatiner-fluid">
            {/* <h1>Product List</h1> */}
            <div className="row">
              {productsArray.map((product) => (
                <div className="col-md-3 mb-4">
                  <div className="card" style={{ overflow: "hidden" }}>
                    <img src={product.image} alt="" className="my-card-img" />
                    <div className="card-body">
                      <p className="text-muted">
                        {product.sponsored ? "sponsored" : ""}
                      </p>
                      {/* <h6>{product.model}</h6> */}
                      <h6>{product.brand}</h6>
                      <h6>{product.price}</h6>
                      <button onClick={() => {addItemToCart(product)}} className="btn btn-primary">Add to Cart</button>
                      <button onClick={() => {addItemToCart(product)}} className="btn btn-primary mx-3">Buy Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrowseFurniture;