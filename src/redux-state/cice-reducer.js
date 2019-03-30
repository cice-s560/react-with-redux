import { SUMA, RESTA } from "./cice-actions";

const initialState = {
    counter: 3,
    other: null
};

function ciceReducer(prevState = initialState, action) {
    switch(action.type) {
        case SUMA:
            return {
                ...prevState,
                counter: prevState.counter + action.payload.amount
            };
        case RESTA:
            return {
                ...prevState,
                counter: prevState.counter - action.payload.amount
            };
        default:
            return prevState;
    }
}

export default ciceReducer;