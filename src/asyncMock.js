
const products = [
    {
        id: '1',
        name: 'Arduino Uno',
        price: 1500,
        category: 'placa',
        img: '../../assets/arduino.png',
        stock: 25,
        description: 'Descripcion de Arduino Uno'

    },

    {
        id: '2',
        name: 'Sensor de movimiento',
        price: 587,
        category: 'sensores',
        img: '../../assets/movimiento.png',
        stock: 21,
        description: 'Descripcion de Sensor de movimiento'

    },

    {
        id: '3',
        name: 'Modulo relay',
        price: 430,
        category: 'actuadores',
        img: '../../assets/modulo-relay-1-canal.png',
        stock: 18,
        description: 'Descripcion de Modulo relay'

    },

];

export const getProducts = ()=> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}


export const getProductsByCategory = (categoryId)=> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categoryId)
        }, 500)
    })
}