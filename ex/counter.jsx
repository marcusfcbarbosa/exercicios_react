import React from 'react'
//Componente por função
import  { bindActionCreators } from 'redux'//liga as ações criadas com os Dispatchers
import { connect } from 'react-redux'//usado para conectar react com redux
import { dec,inc,stepChanged } from  './counterActions'


const Counter =(props) =>(
    <div>
        <h1> {props.counter.number} </h1>

        <input onChange={props.stepChanged}
            value={ props.counter.steps }  type='number'/>
            
        <button onClick={ props.dec }> DEC </button>
        <button onClick={ props.inc }> INC </button>
    </div>
)

const mapStateToProps = state =>({ counter: state.counter })

//Liga as minhas ações com o dispatch do redux
const mapDispatchToProps = 
dispatch => bindActionCreators({ 
            dec,
            inc,
            stepChanged 
    },dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(Counter)