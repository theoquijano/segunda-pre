import { Link } from 'react-router-dom'
import './Item.css'

const Item = ( {id, title, image, price, count} ) => {

    return (
        <article className='item-card'>
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
                    Precio: ${price}
                </p>
                <p className='Info'>
                    Stock disponible: {count}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item