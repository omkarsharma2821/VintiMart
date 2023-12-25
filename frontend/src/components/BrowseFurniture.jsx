import React, { useEffect, useState } from 'react'
// import productData from "./DummyData"
import useCartContext from '../CartContext';

const BrowseFurniture = () => {

  const [productsArray, setProductsArray] = useState([]);
  const [FurnitureList, setFurnitureList] = useState([]);

  const { addItemToCart } = useCartContext();

  const getFurnitureData = async () => {
    const res = await fetch(`${process.env.REACT_APP_VINTIMART_URL}/getall`);
    console.log(res.status);
    const data = await res.json();
    console.table(data);
    setFurnitureList(data);
    setProductsArray(data)
  }

  useEffect(() => {
    getFurnitureData()
  }, [])


  const brands = ["pepperfry", "urban ladder", "godrej", "durian", "wood mount", "royal oak", "zuari", "damro"];
  const searchProduct = (e) => {
    const search = e.target.value;
    let filteredData = FurnitureList.filter((product) => {
      return product.brand.toLowerCase().includes(search.toLowerCase());
    });
    setProductsArray(filteredData);
  };

  const filterBrand = (e) => {
    const search = e.target.value;
    if (!search) {
      setProductsArray([...FurnitureList]);
      return;
    }
    console.log(search);
    let filteredData = FurnitureList.filter((product) => {
      return product.brand.toLowerCase() === search.toLowerCase();
    });
    setProductsArray(filteredData);
  };

  return (
    <div className='bg-light'>
      <header className="bg-dark">
        <div className="container py-3">
          <h1 className="text-center display-2 mb-0 text-white ">
            Discover Your Style
          </h1>
          <h5 className='text-white text-center mb-4'>Home Decor for Sale - Place Where Comfort Meets Elegance</h5>
          <div className='input-group  d-flex mx-auto w-50 mb-2'>
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
            <div className="card shadow mb-4">
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
                      <img src={`${process.env.REACT_APP_VINTIMART_URL}/${product.image}`} alt="wait" className="my-card-img" />
                      <div className="card-body">
                        <p className="text-muted">
                          {product.sponsored ? "sponsored" : ""}
                        </p>
                        <h5><i class="fa-solid fa-tag px-1"></i>{product.brand}</h5>
                        <h5><i className="fa-solid fa-rupee-sign fa-fade mx-1" style={{ color: "#000000" }}></i>{product.price}</h5>
                        <button onClick={() => { addItemToCart(product) }} className="btn btn-sm btn-primary button">Add to Cart</button>
                        {/* <button onClick={() => {addItemToCart(product)}} className="btn btn-sm btn-primary mx-2 button">Buy Now</button> */}
                        <button class="btn btn-primary btn-sm mx-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                          Buy Now
                        </button>

                        <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                          <div class="offcanvas-header">
                            <h1 class="offcanvas-title display-3" id="staticBackdropLabel">VintiMart</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                          </div>
                          <div class="offcanvas-body">
                            <h3>
                            This Furniture is currently unavilable we will notify you once it comes in stock.
                            <br />
                            Thank you!
                            </h3>
                          </div>
                        </div>
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