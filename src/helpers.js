export const revisarPresupuesto = (Presupuesto, Restante) => {
    let clase;
    if ((Presupuesto / 4) > Restante){
        clase = 'alert alert-danger';
    } else if ( (Presupuesto / 2) > Restante){
        clase = 'alert alert-warning';
    } else {
        clase = 'alert alert-success';
    }
    return clase;
};

