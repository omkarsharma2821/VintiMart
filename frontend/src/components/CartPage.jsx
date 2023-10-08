import useCartContext from "../CartContext";

const CartPage = () => {
const {cartitems, removeItemFromCart} = useCartContext();
const diaplayCartItems = () => { 
    if(!cartitems.length) return <h1 className="text-center display-4 text-muted">
        No Items in Cart
    </h1>
    return <table className="table">
        <thead>

            <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody>
            {
                cartitems.map((item, index) =>(
                        <tr>
                            <td>
                                <img height={50} src={item.image} alt =""/>
                            </td>
                            <td>{item.brand}</td>
                            <td>{item.price}</td>
                            <td>{item.FurnitureMaterial}</td>
                            <td> 
                            <button className="btn btn-danger" onClick={ () => removeItemFromCart(index)}>Remove Items</button>
                            </td>
                        </tr>
                ))
}
        </tbody>
    </table>
}
return(
    <div>
        <div className="container py-5">
            {diaplayCartItems()}
        </div>
    </div>
)
}
export default CartPage;
