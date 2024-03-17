import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../config/firebase'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        let collectionRef = collection(db, 'products')
        if (categoryId) {
            collectionRef = query(collectionRef, where('category', '==', categoryId))
        }

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])
    
    return(
        <div>
            <h1>{greeting}</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ItemList products={products} />
            )}
        </div>
    )
}

export default ItemListContainer

// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'

// import ItemList from '../ItemList/ItemList'

// import { getDocs, collection, query, where } from 'firebase/firestore'
// import { db } from '../../config/firebase'

// const ItemListContainer = ({ greeting }) => {
//     const [products, setProducts] = useState ([])
//     const [loading, setLoading] = useState(true)
    
//     const { categoryId } = useParams()

//     useEffect(() => {
//         setLoading(true)

//         const collectionRef = collection(db, 'products')

//         const q = categoryId ? query(collectionRef, where('category', '==', categoryId)) : collectionRef

//         getDocs(q)
//         .then((response)=> {

//             setProducts(
//                 response.docs.map((doc)=> {
//                     return {...doc.data(), id: doc.id}
//                 })
//             )
//         })
//     }, [categoryId])
    
        
//         return (
//             <div>
//             <h1>{greeting}</h1>
//             <ItemList products={products}/>
//         </div>
//     )
// }

// export default ItemListContainer