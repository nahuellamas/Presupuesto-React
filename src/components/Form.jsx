import {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';


const Form = ({guardarGasto, guardarCrearGasto}) => {
    const [nombreGasto, guardarNombreGasto] = useState('');
    const [cantidadGasto, guardarCantidadGasto] = useState(0);
    const [error, guardarError] = useState(false);
    const definirNombreGasto = e => {
        guardarNombreGasto(e.target.value);
    }
    const definirGasto = e => {
        guardarCantidadGasto(parseInt(e.target.value, 10));
    }
    const agregarGasto = e => {
        e.preventDefault();
        //validar
        if(cantidadGasto <= 0 || isNaN(cantidadGasto) || nombreGasto === ''){
            guardarError(true);
            return;
        } else {
            guardarError(false);
        }
        const Gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }
        //pasar gasto a componenete principal
        guardarGasto(Gasto);
        guardarCrearGasto(true);
       //resetear formulario
       guardarNombreGasto('');
       guardarCantidadGasto(0);
    }
    return ( 
        <form onSubmit={agregarGasto}>
            <h2>Agrega los gastos aquí</h2>
            {error ? <Error mensaje={'El gasto tiene que ser mayor a 0 y ambos son obligatorios'}  /> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                onChange={definirNombreGasto}
                value={nombreGasto}
                type="text" 
                className="u-full-width" 
                placeholder="Ej. Transporte"
                />
            </div>
            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input 
                value={cantidadGasto}
                onChange={definirGasto}
                type="number" 
                className="u-full-width" 
                placeholder="Ej. 3500"
                />
            </div>
            <button type="submit" className="button-primary u-full-width">
                Agregar Gasto
            </button>
        </form>
     );
}

Form.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
 
export default Form;