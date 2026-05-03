import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CheckoutForm.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

const CheckoutForm = () => {
    const { cart, clearCart } = useContext(CartContext);

    const [form, setForm] = useState({
        Nombre: "",
        Email: "",
        Telefono: "",
        Direccion: ""
    });
    const [errores, setErrores] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errores[e.target.name]) {
            setErrores({ ...errores, [e.target.name]: "" });
        }
    };

    const validarFormulario = () => {
        const nuevosErrores = {};
        if (!form.Nombre.trim()) nuevosErrores.Nombre = "El nombre es obligatorio";
        if (!form.Email.trim()) nuevosErrores.Email = "El email es obligatorio";
        if (!form.Telefono.trim()) nuevosErrores.Telefono = "El teléfono es obligatorio";
        if (!form.Direccion.trim()) nuevosErrores.Direccion = "La dirección es obligatoria";
        return nuevosErrores;
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        const nuevosErrores = validarFormulario();

        if (Object.keys(nuevosErrores).length === 0) {
            try {
                const totalGeneral = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

                const orden = {
                    buyer: { ...form },
                    items: cart,
                    total: totalGeneral,  // ← Corregido: usa totalGeneral
                    date: new Date()
                };

                const docRef = await addDoc(collection(db, "orders"), orden);
                alert(`¡Gracias por tu compra! Tu número de orden es: ${docRef.id}`);
                clearCart();

                 setForm({
                    Nombre: "",
                    Email: "",
                    Telefono: "",
                    Direccion: ""
                });

            } catch (error) {
                console.error("Error al guardar la orden:", error);
                alert("Hubo un error al procesar tu compra. Intenta nuevamente.");
            }
        } else {
            setErrores(nuevosErrores);
        }
    };

    const totalGeneral = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const isFormValid = form.Nombre && form.Email && form.Telefono && form.Direccion;

    return (
        <div className="checkout-container">
            <h2>Formulario de compras</h2>
            <form onSubmit={handlesubmit}>
                <div className="form-group">
                    <label>Nombre completo</label>
                    <input
                        type="text"
                        name="Nombre"
                        value={form.Nombre}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                    />
                    {errores.Nombre && <div className="error">{errores.Nombre}</div>}
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="Email"
                        value={form.Email}
                        onChange={handleChange}
                        placeholder="correo@ejemplo.com"
                    />
                    {errores.Email && <div className="error">{errores.Email}</div>}
                </div>

                <div className="form-group">
                    <label>Teléfono</label>
                    <input
                        type="text"
                        name="Telefono"
                        value={form.Telefono}
                        onChange={handleChange}
                        placeholder="Tu teléfono"
                    />
                    {errores.Telefono && <div className="error">{errores.Telefono}</div>}
                </div>

                <div className="form-group">
                    <label>Dirección</label>
                    <input
                        type="text"
                        name="Direccion"
                        value={form.Direccion}
                        onChange={handleChange}
                        placeholder="Tu dirección"
                    />
                    {errores.Direccion && <div className="error">{errores.Direccion}</div>}
                </div>

                <div className="resumen-pedido">
                    <h3>Resumen del pedido</h3>
                    {cart.map((item) => (
                        <p key={item.id}>
                            {item.title} - {item.quantity} x ${item.price} = ${item.price * item.quantity}
                        </p>
                    ))}
                    <p className="total">Total: ${totalGeneral}</p>
                </div>

                <button type="submit" disabled={!isFormValid} className="checkout-button">
                    Finalizar compra
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;