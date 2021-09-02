export const incrementar_1 = (state) => {
    state.count++;
    state.lastMutation = 'incrementar 1';
}

export const incremetarBy = (state, value) => {
    state.count += value;
    state.lastMutation = 'incrementarBy' + value;
    state.lastRandomInt = value;
}

export const setLoading = (state, value) => {
    state.isLoading = value;
}