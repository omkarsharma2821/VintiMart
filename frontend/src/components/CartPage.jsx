import { useRef } from "react";
import useCartContext from "../CartContext";
import { useState } from "react";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

const CartPage = () => {
    const { cartitems, removeItemFromCart, setCartItems } = useCartContext();
    const addressRef = useRef(null);

    console.log(cartitems);    

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    const saveOrder = async () => {
        const res = await fetch('http://localhost:5000/order/add', {
            method: 'POST',
            body: JSON.stringify({
                items: cartitems,
                user: currentUser._id,
                address: addressRef.current.value,
                createdAt: new Date()
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        });
        console.log(res.status);
        setCartItems([])
        // alert
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Order Booked Successfully",
        text: "Happy Shopping",
      });
      // resetForm(); 
      Navigate("/browsefurniture");
    }
    }

    const diaplayCartItems = () => {
        if (!cartitems.length) return <h1 className="text-center display-4 text-muted">
            No Items in Cart 
        </h1>
        return <table className="table table-bordered table align-middle text-center table-hover bg table-warning   ">
            <thead className="table-primary ">

                <tr>
                    <th className="width">Image</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Material</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    cartitems.map((item, index) => (
                        <tr>
                            <td>
                            <img height={50} src={"http://localhost:5000/"+item.image} alt="" />
                            </td>
                            <td>{item.brand}</td>
                            <td>{item.price}</td>
                            <td>{item.material}</td>
                            <td>
                                <button className="btn btn-danger button" onClick={() => removeItemFromCart(index)}>Remove Item</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    }
    return (
        <div>
            <div className="container py-5">
                {diaplayCartItems()}

                {/* <label htmlFor="">Add Delivery Address</label> */}
                <h4>Add Delivery Address</h4>
                <textarea ref={addressRef} className="form-control mt-2" name="" id=""></textarea>
                <button className="btn btn-success mt-2 button" onClick={saveOrder}>Book Order</button>
            </div>
        </div>
    )
}
export default CartPage;
