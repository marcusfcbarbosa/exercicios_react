import React , { Component } from 'react'

//componentes por classe
export default class ClassComponent extends Component {
    render(){
        return (
            <h1>{ this.props.value} </h1>
        )
    }
}