import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { Link } from 'react-router-dom'


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
            <button>Carrito</button>
            { totalQuantity }
        </Link>
    )
}

export default CartWidget