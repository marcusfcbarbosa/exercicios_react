import React from 'react'
import ReactDOM from 'react-dom'
import ClassComponente from './classComponente'

//componente por classe com estado
//passando a propriedade LastName para as filhas dentro de Family
ReactDOM.render(
    <ClassComponente label="Contador" initialValue={10} />
, document.getElementById('app'))