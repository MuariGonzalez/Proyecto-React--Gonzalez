import { useContext } from 'react';
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from 'react-router-dom';
import CartItem from "../CartItem/CartItem";
import "./Cart.css";


const Cart = () => {
    const {carrito, vaciarCarrito, total, cantidadTotal} = useContext(CarritoContext);

    if ( cantidadTotal === 0){
        return(
            <>
                <h2 className='carritoVacio'>No hay productos en el carrito.</h2>
                <Link to="/" className="linkProductos"> Ver Productos </Link>
            </>
        )
    }

  return (
    <div>
        {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
        <h3 className="etiqueta">Total: $ {total} </h3>
        <h3 className="etiqueta">Cantidad Total: {cantidadTotal} </h3>
        <button className="botonVaciar" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
        <Link to="/checkout" className="checkoutLink">Finalizar Compra</Link>
    </div>
  )
}

export default Cart