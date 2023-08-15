import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import "./CartItem.css";

const CartItem = ({ item, cantidad }) => {
    const { eliminarProducto } = useContext(CarritoContext);

    return (
        <div className="itemContainer">
            <div className="itemDetails">
                <h4 className="itemNombre"> {item.nombre} </h4>
                <p className="itemCantidad"> Cantidad: {cantidad} </p>
                <p className="itemPrecio"> Precio: {item.precio} </p>
            </div>   
            <button className="botonEliminar" onClick={() => eliminarProducto(item.id)} > Eliminar </button>
            
        </div>
    )
}

export default CartItem