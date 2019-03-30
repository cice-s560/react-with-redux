export const SUMA = "SUMA";
export const actionSuma = (amount) => ({
    type: SUMA,
    payload: {
        amount
    }
});

export const RESTA = "RESTA";
export const actionResta = (amount) => ({
    type: RESTA,
    payload: {
        amount
    }
});
