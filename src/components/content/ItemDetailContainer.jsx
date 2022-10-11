import React from 'react';
import { useState, useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
const ProductDetails = ({ producto }) => {
    const [cantidad, setCantidad] = useState(1);

    const {carrito, agregarProducto, quitarProducto} = useContext(CarritoContext);

    const cantProducto = (operation) => {
        if (operation === '+') {
            if (cantidad < producto.stock) {
                setCantidad(cantidad + 1);
            }
        } else {
            if (cantidad > 1) {
                setCantidad(cantidad - 1);
            }
        }
    }


    
    return (
        <>
            <div className='d-flex align-items-center justify-content-center h-100'>
                <div className="cardDetails">
                    <img src={"../img/" + producto.img} className="img-fluid rounded-start" alt={producto.id} />
                </div>
                <div className="detailContainer">
                    <div className="card-body">
                        <p className="card-text cardName">{producto.nombre}</p>
                        <h5 className="card-title">{producto.marca}</h5>
                        <p className="card-text">Marca: {producto.modelo}</p>
                        <p className="card-text">Stock: {producto.stock}</p>
                        <p className="card-text">Precio: ${producto.precio}</p>
                        <button className='btn btnVerProducto' onClick={() => cantProducto("+")}>+</button>
                        <p className='card-text'>{cantidad}</p>
                        <button className='btn btnVerProducto' onClick={() => cantProducto("-")}>-</button>
                        <button className='btn btnVerProducto' onClick={() => agregarProducto(producto, cantidad)}>Comprar Producto</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProductDetails;
