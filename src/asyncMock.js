
const products = [
    {
        id: '1',
        name: 'Arduino Uno',
        price: 1500,
        category: 'placas',
        img: '../../assets/arduino.png',
        stock: 25,
        description: 'Placa de desarrollo y el modelo de referencia para herramientas de creación de prototipos para la educación.'

    },

    {
        id: '2',
        name: 'Sensor de movimiento',
        price: 587,
        category: 'sensores',
        img: '../../assets/movimiento.png',
        stock: 21,
        description: 'El sensor de Movimiento (PIR) es un dispositivo utilizado para la detección de movimiento o presencia. Se basa en la medición de radiación infrarroja pasiva.'

    },

    {
        id: '3',
        name: 'Modulo relay',
        price: 430,
        category: 'actuadores',
        img: '../../assets/modulo-relay-1-canal.png',
        stock: 18,
        description: 'Permite controlar el encendido/apagado de equipos de potencia'

    },

    {
        id: '4',
        name: 'Sensor de temperatura y humedad',
        price: 587,
        category: 'sensores',
        img: '../../assets/censor_humedad_y_temperatura.png',
        stock: 21,
        description: 'utiliza un sensor capacitivo de humedad y un termistor para medir el aire circundante, y muestra los datos mediante una señal digital en el pin de datos.'

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
            resolve(products.filter(prod => prod.category.toLowerCase() === categoryId.toLowerCase()))
        }, 500)
    })
}