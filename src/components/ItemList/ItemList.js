import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
        <div className='menu-cards'>
            {products.length > 0 ? (
                products.map(prod => <Item key={prod.id} {...prod} />)
            ) : (
                <p>Producto no encontrado</p>
            )}
        </div>
    )
}

export default ItemList
