import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import { Link } from 'react-router-dom';

const ViewOrders = () => {
  const [furnitureList, setfurnitureList] = useState([]);
  const getfurnitureData = async () => {
    const res = await fetch(
      `${process.env.REACT_APP_VINTIMART_URL}/order/getall`
    );
    console.log(res.status);
    const data = await res.json();
    console.table(data);
    setfurnitureList(data);
  };
  useEffect(() => {
    //when component opens
    getfurnitureData();
  }, []);

  // request to delete
  const deletefurniture = async (id) => {
    const res = await fetch(
      `${process.env.REACT_APP_VINTIMART_URL}/order/delete/` + id,
      {
        method: "DELETE",
      }
    );
    console.log(res.status);
    if (res.status === 200) {
      getfurnitureData();
      toast.success("Furniture Deleteed successfully");
    }
  };

  return (
    <div className="vh-100 bg-body-secondary">
      <div className="container py-4">
        <h1 className="text-center mb-4 text-bold">Track Your Orders</h1>

        <table className="table table-bordered table align-middle text-center table-hover table-warning shadow-lg">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Ordered On</th>
              <th>Details</th>
              <th>Delivery Address</th>
              <th>Remove Item</th>
              {/* <th colSpan={2} className='text-center'>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {furnitureList.map((furniture, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{new Date(furniture.createdAt).toLocaleDateString()}</td>
                <td>
                  <details>
                    <summary>View More</summary>
                    {furniture.items.map((item) => (
                      <div className="d-flex align-items-center justify-content-between bg-white p-4">
                        <img
                          height={50}
                          src={`${process.env.REACT_APP_VINTIMART_URL}/${item.image}`}
                          alt=""
                        />
                        <h5>{item.brand}</h5>
                        <h5>{item.material}</h5>
                      </div>
                    ))}
                  </details>
                </td>
                <td>{furniture.address}</td>
                {/* <td>{furniture.user.name}</td> */}
                {/* <td>
                    <Link to={"/updatefurniture/" + furniture._id} className='btn btn-primary button'>Edit</Link>
                  </td> */}
                <td>
                  <button
                    onClick={() => deletefurniture(furniture._id)}
                    className="btn btn-danger button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

//hook lifecycle ke lie
//useeffect autosave ke lie

export default ViewOrders;
