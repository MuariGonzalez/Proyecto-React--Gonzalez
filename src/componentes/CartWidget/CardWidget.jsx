import { useContext } from 'react';
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from 'react-router-dom';


const CardWidget = () => {
   const {cantidadTotal} = useContext(CarritoContext);
   const imgCarrito = "../img/carrito.png";
   
   return (
    <div>
        <Link to="/cart">
            <img src={imgCarrito} alt="Carrito de compras" />
            {
              cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
            }
        </Link>
    </div>
        

  )
}

export default CardWidget