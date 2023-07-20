import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd})=> {

    const [quantity, setQuantity] = useState(initial)

    const increment = ()=> {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = ()=> {
        if(quantity >1) {
            setQuantity(quantity-1)
        }
    }

    return (
        <div className='Counter'>
            <div className='buttons is-centered'>
                <button className='button is-link' onClick={increment}>+</button>
                <h4 className='Number'>{quantity}</h4>
                <button className='button is-link' onClick={decrement}>-</button>
            </div>
            <div>
            <button className='button is-link' onClick={() => onAdd(quantity) } disabled={!stock}>Agregar al carrito</button>
      
            </div>
    
        </div>
    )

}



export default ItemCount;