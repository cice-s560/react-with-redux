import React from "react";
import { connect } from "react-redux";
import { actionSuma, actionResta } from "../../redux-state/cice-actions";
import { sayHello, sayBye } from "../../redux-state/cice-second-actions";

const Saludo = (props) => (
    <div>
        <p>{props.texto} Clase. Hemos pulsado {props.clicks} veces</p>

        <button onClick={() => { props.onSuma(1) }}>Suma</button>
        <button onClick={() => { props.onResta(1) }}>Resta</button>
        <button onClick={() => { props.onSaluda() }}>Saluda</button>
        <button onClick={() => { props.onDespide() }}>Despide</button>
        <button onClick={() => { props.onWaste() }}>Waste</button>
    </div>
);

const mapStateToProps = (store) => ({
    clicks: store.cice.counter,
    texto: store.comunicacion.message
});

const mapDispatchToProps = (dispatch) => ({
    onSuma: amount => { dispatch(actionSuma(amount)) },
    onResta: amount => { dispatch(actionResta(amount)) },
    // Cuando llame a props.onSaluda
    // -> uso el dispatch() que recibe un obj
    // --> que viene del creator que ejecuto
    onSaluda: () => { dispatch(sayHello()) },
    onDespide: () => { dispatch(sayBye()) },
    // Puedo ejecutar callbacks que no usen el store, pero para qué...
    onWaste: () => console.log("Perdiendo tiempo")
});

// 1. La func que devuelve el obj de props a inyectar,
// 2. La func que devuelve el obj con props tipo "callback" 
//  para ejecutar acciones CON EL DISPATCH
const connection = connect(mapStateToProps, mapDispatchToProps); // ()

export default connection(Saludo); // Devuelvo el componente conectado a Redux
