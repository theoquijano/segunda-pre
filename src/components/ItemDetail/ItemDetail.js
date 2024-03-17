import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartContext'

const ItemDetail = ( {product} ) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id: product.id,
            title: product.Nombre,
            price: product.Precio
        }
        addItem(item, quantity)
    }

    return (
        <article className='item-detalle'>
            <header>
                <h2>
                    {product.Nombre}
                </h2>
            </header>
            <picture>
                <img src={product.image} alt={product.Nombre} />
            </picture>
            <section>
                <p>
                    Categoria: {product.category}
                </p>
                <p>
                    Descripcion: {product.description}
                </p>
                <p>
                    Stock: {product.Stock}
                </p>
                <p>
                    Precio: ${product.Precio}
                </p>
            </section>
            <footer>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'>Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} count={product.Stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>

    )
}

export default ItemDetail