import { SALUDO, DESPIDE } from "./cice-second-actions";

const initialState = {
    message: "(inicio)"
};

function secondReducer(prevState = initialState, action) {
    switch(action.type) {
        case SALUDO:
            return {
                ...prevState,
                message: "Hola"
            }
        case DESPIDE:
            return {
                ...prevState,
                message: "Adiós"
            }
        default:
            return prevState;
    }
}

export default secondReducer;