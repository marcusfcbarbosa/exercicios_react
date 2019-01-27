import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

//passando a propriedade LastName para as filhas dentro de Family
ReactDOM.render(
    
    <Family lastName='Silva'>
        <Member name='Guilherme'  />
    </Family>
, document.getElementById('app'))