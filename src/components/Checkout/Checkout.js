
import { useContext, useState } from "react"
import CartContext from "../../Context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"
import { Timestamp, addDoc, collection, documentId, getDocs,query, where, writeBatch } from 'firebase/firestore'
import CheckoutForm from '../CheckoutForm/CheckoutForm'


const Checkout = () => {
      
     const [loading, setLoading] = useState(false)
     const [orderId, setOrderId] = useState('')

     const { cart, total, clearCart} = useContext(CartContext)

     const createOrder = async ({name, phone, email}) =>{
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart, 
                total: total,
                date: Timestamp.frontDate(new DataTransfer())
            }
            const batch = writeBatch(db)
            const outOffStock = []
            const id = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where (documentId(), 'in', id)))
            const {docs} = productsAddedFromFirestore

            docs.forEach(doc =>{
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.prodQuantity
                
                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})

                }else{
                    outOffStock.push({ id: doc.id, ...dataDoc})
                }
            })
            
            if(outOffStock.length ===0){
                await batch.commit()

                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            }else {
                console.error('Hay productos que estan fuera de stock')
            }
        } catch(error){
            console.log(error)
        } finally {
            setLoading(false)
        }

        }

    if (loading) {
        return <h1>Se esta generando su orden... {orderId}</h1>
    }

    if(orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return(
        <div>
            <h1>Checkout</h1>
           <CheckoutForm onConfirm={createOrder}/>
        </div>

    )
}

export default Checkout