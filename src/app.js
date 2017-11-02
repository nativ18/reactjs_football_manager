import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './playground/Components.js'
import configureStore from './store/configureStore.js';
import {Provider} from 'react-redux';
import AppRouter from "./routers/AppRouter";
import {createPlayer} from "./actions/players";
import './styles/styles.scss'

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

function allStorage() {

    const keys = Object.keys(localStorage);
    let i = keys.length;

    while (i--) {
        console.log("key = " + keys[i])
        console.log("item = " + localStorage.getItem(keys[i]))
        store.dispatch(createPlayer(false,JSON.parse(localStorage.getItem(keys[i]))))
    }

}

allStorage();

const state = store.getState();
console.log(state)

ReactDOM.render(jsx, document.getElementById('app'));
