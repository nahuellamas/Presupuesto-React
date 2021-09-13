import {Fragment} from 'react';
import { revisarPresupuesto } from '../helpers';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({Presupuesto, Restante}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
               <p> El presupuesto es de: $ {Presupuesto} </p>
            </div>
            <div className={revisarPresupuesto(Presupuesto, Restante)}>
                <p> Restante: $ {Restante} </p>
            </div>
        </Fragment>
     );
}

ControlPresupuesto.propTypes = {
    Presupuesto: PropTypes.number.isRequired,
    Restante: PropTypes.number.isRequired
}
 
export default ControlPresupuesto;