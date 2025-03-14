import { Link } from 'react-router-dom'
import kurt from '../assets/kurt.webp'
function AboutPage() {
    return (
        <>

            <img src={kurt} alt="yo ahora" />
            <h1 style={{ color: '#57C5FA', textAlign: 'center' }}>Bienvenidos</h1>
            <p style={{ color: 'black', fontSize: '18px', fontStyle: 'italic', textAlign: 'center' }}>
            Hola, me llamo Kurt Chacón, soy estudiante de Ironhack. En este proyecto, me dedico a crear una página donde puedes ver varios detalles de un juego y leer comentarios de otros usuarios. Además, puedes crear, editar y eliminar tus propios comentarios. Más adelante, quiero añadir funcionalidades como la compra de juegos.
            </p>

           
        </>
    )
}

export default AboutPage;