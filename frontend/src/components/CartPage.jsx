import { useRef } from "react";
import useCartContext from "../CartContext";
import { useState } from "react";

const CartPage = () => {
    const { cartitems, removeItemFromCart } = useCartContext();
    const addressRef = useRef(null);

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

    const saveOrder = async () => {
        const res = await fetch('http://localhost:5000/order/add', {
            method: 'POST',
            body: JSON.stringify({
                items: cartitems,
                user: currentUser._id,
                address: addressRef.current.value,
                createdAt: new Date()
            })
        });
        console.log(res.status);
        // alert
    }

    const diaplayCartItems = () => {
        if (!cartitems.length) return <h1 className="text-center display-4 text-muted">
            No Items in Cart
        </h1>
        return <table className="table table-bordered table align-middle text-center table-hover bg">
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
                            <img className="" height={50} src={item.image} alt="" />
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

                <label htmlFor="">Add Delivery Address</label>
                <textarea ref={addressRef} className="form-control mt-2" name="" id=""></textarea>
                <button className="btn btn-success mt-2" onClick={saveOrder}>Book Order</button>
            </div>
        </div>
    )
}
export default CartPage;
