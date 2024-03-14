import { CartContext } from "../../context/CartContext"
import { useContext } from "react"


 const CartItem = ( {title, quantity, price, id} ) => {
    const { removeItem } = useContext(CartContext)

    return(
        <div>
            <h2>{title}</h2>
            <p>cantidad: {quantity}</p>
            <p>subtotal: {quantity * price}</p>
            <button onClick={() => removeItem(id)}>eliminar</button>
        </div>
    )
}


export default CartItem