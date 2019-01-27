import React , { Component } from 'react'

//componentes por classe com estado
export default class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = { valorEstado: props.initialValue } //inicializando o estado do componente
    }    

    sum(delta){
        this.setState({  valorEstado: this.state.valorEstado + delta })//evoluindo o estado
    }

    render(){
     //this.props.value++ //isso nao vai funcionar pois othis.props é somente leitura
        return (
            <div>
                <h1>   { this.props.label }</h1>
                <h1>   { this.state.valorEstado }</h1>
                <button onClick={()=>this.sum(-1)}>Dec </button>
                <button onClick={()=>this.sum(1)}>Inc </button>
            </div>
        )
    }
}