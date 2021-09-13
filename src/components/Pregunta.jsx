import {Fragment, useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);
    const definirPresupuesto = (e) => {
         const presupuesto = parseInt(e.target.value, 10);
         guardarCantidad(presupuesto);
    }
    const agregarPresupuesto = (e) => {
        e.preventDefault();
        if (cantidad <= 0 || isNaN(cantidad)) {
            guardarError(true);
            return;
        } else {
            guardarError(false);
        }
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    };

    return ( 
        <Fragment>
            <h2>Coloca el presupuesto</h2>
            {error ? <Error mensaje={'Presupuesto Incorrecto: No puede ser negativo o 0'} /> : null}
            <form onSubmit={agregarPresupuesto}>
                <input 
                type="number" 
                className="u-full-width " 
                placeholder="Coloca el presupuesto" 
                onChange={definirPresupuesto}
                />
                <button value="definir presupuesto" className="button-primary u-full-width" type="submit">Colocar presupuesto</button>
            </form>
        </Fragment>
     );
}
 
Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta;