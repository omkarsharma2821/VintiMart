import useCartContext from "../CartContext";

const CartPage = () => {
const {cartitems, removeItemFromCart} = useCartContext();
const diaplayCartItems = () => { 
    if(!cartitems.length) return <h1 className="text-center display-4 text-muted">
        No Items in Cart
    </h1>
    return <table className="table table-bordered table align-middle text-center table-hover bg">
        <thead className="table-primary ">

            <tr>
                <th className="width">Image</th>
                <th>Brand</th>
                <th>Price</th> 
                <th>Material</th>
                <th colSpan={2} className='text-center'>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                cartitems.map((item, index) =>(
                        <tr>
                            <td>
                                <img className="cart-img" height={50} src={item.image} alt =""/>
                            </td>
                            <td>{item.brand}</td>
                            <td>{item.price}</td>
                            <td>{item.material}</td>
                            <td> 
                            <button className="btn btn-danger button" onClick={ () => removeItemFromCart(index)}>Remove Item</button>
                            </td>
                            <td> 
                            <button className="btn btn-primary button" onClick={ () => removeItemFromCart(index)}>Buy Item</button>
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
