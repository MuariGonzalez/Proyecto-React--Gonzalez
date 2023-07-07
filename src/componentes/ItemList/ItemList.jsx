import Item from "../Item/CardsProductos"


const ItemList = ({productos}) => {
    return(
        <div className="contProductos">
            {productos.map(prod => <Item key = {prod.id} {...prod} />)}
        </div>
     
    )
}

export default ItemList