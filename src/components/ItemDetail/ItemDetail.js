import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, title, image, category, description, price, stock }) => {
    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {title}
                </h2>
            </header>
            <picture>
                <img src={image} alt={title} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {category}
                </p>
                <p className='Info'>
                    Descripcion: {description}
                </p>
                <p className='Info'>
                    Precio: ${price}
                </p>
            </section>
            <footer>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)} />
            </footer>
        </article>

    )
}

export default ItemDetail