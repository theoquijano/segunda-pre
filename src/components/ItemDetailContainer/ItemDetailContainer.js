import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from '../ItemDetail/ItemDetail'

import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../config/firebase'

const ItemDetailContainer = ()=> {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const itemId = useParams().itemId

    useEffect(()=> {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = { id: response.id, ...data }
                setProduct(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=> {
                setLoading(false)
            })
    }, [itemId]) 

    return (
        <div className='ItemDetailContainer'>
            {!loading && product && <ItemDetail product={product}/>}
        </div>
    )    
}

export default ItemDetailContainer