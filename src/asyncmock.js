const misProductos = [
    {id: "1", nombre: "Lenceria", precio: 300,idCat: "lenceria"},
    {id: "2", nombre: "Lenceria", precio: 300,idCat: "lenceria"},
    {id: "3", nombre: "Lenceria", precio: 300,idCat: "lenceria"},
    {id: "4", nombre: "Juguetes", precio: 300,idCat: "juguetes"},
    {id: "5", nombre: "Juguetes", precio: 300,idCat: "juguetes"},
    {id: "6", nombre: "Juguetes", precio: 300,idCat: "juguetes"},
    {id: "7", nombre: "Vibradores", precio: 300,idCat: "vibradores"},
    {id: "8", nombre: "Vibradores", precio: 300,idCat: "vibradores"},
    {id: "9", nombre: "Vibradores", precio: 300,idCat: "vibradores"}
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        },2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto)
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise( resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter (prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}