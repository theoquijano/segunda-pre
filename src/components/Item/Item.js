import { Link } from 'react-router-dom'
import './Item.css'

const Item = ( {id, Nombre, image, Precio, Stock} ) => {

    return (
        <article className='item-card'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {Nombre}
                </h2>
            </header>
            <picture>
                <img src={image} alt={Nombre} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${Precio}
                </p>
                <p className='Info'>
                    Stock disponible: {Stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/item/${id}`} className="Option">Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item