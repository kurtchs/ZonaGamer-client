import React from 'react';
import pikachu from '../assets/pika.jpeg'

function NotFoundPage() {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center",  alignItems: "center ", padding: '50px' }}>

            <h1 style={{ color: '#a40e0e' }}>¡Página no encontrada !</h1>
            <img src={pikachu} alt="Pikachu" style={{ display: "flex", flexDirection: "column", justifyContent: "center",  alignItems: "center ", width:200  }} />
            
        </div>
    );
}
export default NotFoundPage;