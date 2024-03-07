import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ( {product} ) => {
    return (
        <article className='item-detalle'>
            <header>
                <h2>
                    {product.title}
                </h2>
            </header>
            <picture>
                <img src={product.image} alt={product.title} />
            </picture>
            <section>
                <p>
                    Categoria: {product.category}
                </p>
                <p>
                    Descripcion: {product.description}
                </p>
                <p>
                    Stock: {product.count}
                </p>
                <p>
                    Precio: ${product.price}
                </p>
            </section>
            <footer>
                <ItemCount initial={1} count={product.count} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
            </footer>
        </article>

    )
}

export default ItemDetail