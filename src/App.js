import Pregunta from './components/Pregunta';
import Form from './components/Form';
import {useState, useEffect} from 'react';
import List from './components/List';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  const [Presupuesto, guardarPresupuesto] = useState(0);
  const [Restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  //actualizamos el restante
  useEffect( () => {
    if (crearGasto) {

      guardarGastos([
        ...gastos,
        gasto
      ]);
      const presupuestoRestante = Restante - gasto.cantidadGasto;
      guardarRestante(presupuestoRestante);
    } 
    guardarCrearGasto(false);
  }, [gasto, crearGasto, gastos, Restante] );

  return (
    <div className="container">
      <header>
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? 
          (<Pregunta 
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            actualizarPregunta={actualizarPregunta}
          />) : 
            ( <div className="row">
                  <div className="one-half column">
                    <Form 
                      guardarCrearGasto={guardarCrearGasto}
                      guardarGasto={guardarGasto}
                    />
                  </div>
                  <div className="one-half column">
                    <List
                      gastos={gastos}
                     />

                    <ControlPresupuesto
                      Presupuesto={Presupuesto}
                      Restante={Restante}
                    />
                  </div>
              </div>)
          }
        </div>
      </header>
    </div>
  );
}

export default App;
