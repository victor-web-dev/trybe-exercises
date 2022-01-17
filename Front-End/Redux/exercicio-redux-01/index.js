const Redux = require('redux');

const { createStore } = Redux;

// Criando uma action
const fazerLogin = (email) => ({
    type: 'LOGIN',
    email,
});

// criando state para o reducer e o reducer.
const INITIAL_STATE = {
    login: false,
    email: '',
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                login: !state.login,
                email: action.email,
            }
    
        default:
            return state;
    }
}

// cria a store
const store = createStore(reducer);

// testando se retorna o estado
//console.log(store.getState());

//testando se a action modifica o state da store
store.dispatch(fazerLogin('teste@teste.teste'));
console.log(store.getState());