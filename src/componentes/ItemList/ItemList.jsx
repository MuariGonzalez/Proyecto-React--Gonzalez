import Item from "../Item/CardsProductos"
import '.ItemList.css'

const ItemList = ({productos}) => {
    return(
        <div className="contProductos">
            {productos.map(prod => <Item key = {prod.id} {...prod} />)}
        </div>
     
    )
}

export default ItemList