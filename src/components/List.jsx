import Gasto from './Gasto';
import PropTypes from 'prop-types';

const List = ({gastos}) => {
    return ( 
        <div className="gastos-realizados">
            <h2>Lista de Gastos</h2>
            {gastos.map(gasto => (
                <Gasto 
                    gasto={gasto}
                    key={gasto.id}
                />
            )) }
        </div>
     );
}

List.propTypes = {
    gastos: PropTypes.array.isRequired
}

export default List;