const misProductos = [
    {id: "1", nombre: "Lenceria", precio: 300,idCat: lenceria},
    {id: "", nombre: "Lenceria", precio: 300,idCat: lenceria},
    {id: "3", nombre: "Lenceria", precio: 300,idCat: lenceria},
    {id: "4", nombre: "Juguetes", precio: 300,idCat: Juguetes},
    {id: "5", nombre: "Juguetes", precio: 300,idCat: Juguetes},
    {id: "6", nombre: "Juguetes", precio: 300,idCat: Juguetes},
    {id: "7", nombre: "Vibradores", precio: 300,idCat: Vibradores},
    {id: "8", nombre: "Vibradores", precio: 300,idCat: Vibradores},
    {id: "9", nombre: "Vibradores", precio: 300,idCat: Vibradores}
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