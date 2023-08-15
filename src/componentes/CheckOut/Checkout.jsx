import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/firebase";
import { collection, addDoc } from "firebase/firestore";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Checkout.css";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    const manejadorFormulario = (event) => {
        event.preventDefault();

        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion){
            setError("Por favor completa todos los campos");
            return;
        }

        if(email !== emailConfirmacion) {
            setError("Verificar Email Confirmación, no coinciden. Por favor corregir para continuar.");
            return;
        }

        const orden = {
            items: carrito.map(producto=>({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        };

        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("Error al crear la orden, ", error);
                setError("Se produjo un error al crear la orden. Intentalo nuevamente");
            })

    }

    return(
        <div className="checkout-container">
            <h2 className="checkout"> Checkout </h2>
            <Form className="formulario" onSubmit={manejadorFormulario}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p> {producto.item.nombre} x {producto.cantidad} </p>
                            <p> {producto.item.precio} </p>
                            <hr />
                        </div>
                    ))
                }

                <hr />

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control  type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Apellido" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control type="text" value={telefono} onChange={(e)=> setTelefono(e.target.value)} placeholder="Teléfono" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Ingrese email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email confirmación</Form.Label>
                    <Form.Control type="email" value={emailConfirmacion} onChange={(e)=> setEmailConfirmacion(e.target.value)} placeholder="Confirme email" />
                </Form.Group>

                {
                    error && <p className="mensajeError" style={{color : "red"}}> {error} </p>
                }
                <Button variant="primary" type="submit">
                    Finalizar Compra
                </Button>
            </Form>
            {
                ordenId && (
                    <strong className="mensajeExitoso">Gracias por tu compra. tu número de orden es {ordenId}
                    </strong>
                )
            }
        </div>
    )

}

export default Checkout