import React from 'react'
import ReactDOM from 'react-dom'

import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import Field from './field'

//Conectado Redux com  React no ponto de vista dos atributos
//dessa forma o state, do componente foi alterado pelo props, usando o método mapStateToProps
const reducers = combineReducers({
    field:()=> ({ value: 'Conectado React com Redux'})
})


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='Teste' />
    </Provider>
    
, document.getElementById('app'))