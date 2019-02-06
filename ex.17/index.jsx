import React from 'react'
import ReactDOM from 'react-dom'

import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Field from './field'
import fieldReducer from './fieldReducer'


//Esse combineReducers que ta controlando seu estado
const reducers = combineReducers({
    field: fieldReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Teste' />
    </Provider>
    
, document.getElementById('app'))