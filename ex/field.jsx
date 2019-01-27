import React, {Component}  from 'react'


class Field extends Component {

    constructor(props){
        super(props)        
        this.state ={ valorEstado: props.initialValue }
        this.handleChange = this.handleChange.bind(this)
    }

    //sempre que digitar alguma coisa no campo, esse evento estara responavewl por ele
    //target do event seria o input
    //<input onChange={this.handleChange} value={this.state.value || ''} /> dessa forma ele nunca ira setar um componente sem controle
    handleChange(event){
        this.setState({ valorEstado : event.target.value })
    }

    render(){
        return(
            <div>
                <label> { this.state.valorEstado }</label> <br/>
                <input onChange={this.handleChange} value={this.state.valorEstado || ''} />
            </div>
        )
    }
}

export default Field