

const Item = ( {id, title, image, price, stock} ) => {

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
                    Precio: ${price}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <link to={`/item/${id}`} className="Option">Ver detalle</link>
            </footer>
        </article>
    )
}

export default Item