export const SUMA = "SUMA";
export const actionSuma = amount => ({
  type: SUMA,
  payload: {
    amount
  }
});

export const RESTA = "RESTA";
export const actionResta = amount => ({
  type: RESTA,
  payload: {
    amount
  }
});

export const FETCH_USERS = "FETCH_USERS";
export const fetchUsers = users => ({
  type: FETCH_USERS,
  payload: {
    users
  }
});
