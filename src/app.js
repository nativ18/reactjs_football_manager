import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './playground/Components.js'
import configureStore from './store/configureStore.js';
import {Provider} from 'react-redux';
import AppRouter from "./routers/AppRouter";
import {addExpense} from "./actions/expenses";
import {createPlayer} from "./actions/players";

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

store.dispatch(createPlayer({fullname: "Nativ Levy", age: 33, price: 1000000, position: "AT"}))
store.dispatch(createPlayer({fullname: "Nir Biton", age: 33, price: 1000000, position: "GK"}))


const state = store.getState();
console.log(state)

ReactDOM.render(jsx, document.getElementById('app'));
