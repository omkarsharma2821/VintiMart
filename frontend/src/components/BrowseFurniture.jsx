import React, { useEffect, useState } from 'react'
// import productData from "./DummyData"
import useCartContext from '../CartContext';

const BrowseFurniture = () => {

  const [productsArray, setProductsArray] = useState([]);
  const [FurnitureList, setFurnitureList] = useState([]);

  const {addItemToCart} = useCartContext();

  const getFurnitureData = async () => {
    const res = await fetch('http://localhost:5000/furniture/getall');
    console.log(res.status);
    const data = await res.json();
    console.table(data);
    setFurnitureList(data);
    setProductsArray(data)
}

useEffect(() => {
  getFurnitureData()
}, [])


  const brands = ["pepperfry", "urban ladder", "godrej", "durian","wood mount", "royal oak","zuari", "damro"];
  const searchProduct = (e) => {
    const search = e.target.value;
    let filteredData = FurnitureList.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase());
    });
    setProductsArray(filteredData);
  };

  const filterBrand = (e) => {
    const search = e.target.value;
    let filteredData = FurnitureList.filter((product) => {
      return product.brand === search;
    });
    setProductsArray(filteredData); 
  };

  return (
    <div className='bg-light'>
      <header className="bg-dark">
        <div className="container py-3">
          <h1 className="text-center display-4 mb-0 text-white ">
          Discover Your Style
          </h1>
            <h6 className='text-white text-center mb-4'>Home Decor for Sale - Place Where Comfort Meets Elegance</h6>
            <div className='input-group  d-flex mx-auto w-50'>
          <input
            type="text"
            className='form-control m-auto'
            onChange={searchProduct}
            placeholder='Search in VintiMart....'
          />
          <button className="btn btn-primary"><i class="fa-solid fa-magnifying-glass fa-beat fa-lg"></i></button>
          </div>
        </div>
      </header>
      <div className="px-5">
      <div className="row mt-4">
        <div className="col-3">
          <div className="card shadow">
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
                  <div className="card shadow" style={{ overflow: "hidden" }}>
                    <img src={'http://localhost:5000/'+product.image} alt="" className="my-card-img" />
                    <div className="card-body">
                      <p className="text-muted">
                        {product.sponsored ? "sponsored" : ""}
                      </p>
                      <h6><i class="fa-solid fa-tag px-1"></i>{product.brand}</h6>
                      <h5><i className="fa-solid fa-rupee-sign fa-fade mx-1" style={{color: "#000000"}}></i>{product.price}</h5>
                      <button onClick={() => {addItemToCart(product)}} className="btn btn-sm btn-primary button">Add to Cart</button>
                      <button onClick={() => {addItemToCart(product)}} className="btn btn-sm btn-primary mx-2 button">Buy Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default BrowseFurniture;