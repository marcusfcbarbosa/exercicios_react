import React, {Component}  from 'react'
import { connect } from 'react-redux'//usado para conectar react com redux
import  { bindActionCreators } from 'redux'//liga as ações criadas com os Dispatchers
import { changeValue } from './fieldAction'

class Field extends Component {
    
    render(){
        return(
            <div>
                <label> { this.props.value }</label> <br/>
                <input  onChange={ this.props.changeValue } value={this.props.value || ''} />
            </div>
        )
    }
}

//Mapeia basicamente o estado para a props
function mapStateToProps(state){
    return {
        value: state.field.value
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({changeValue}, dispatch)
    //changeValue = representam os actionCreators, dispatch que é a requisição do componente para o store
    //dessa forma eu consigo atribuir uma conexão entre o props e o changeValue, que está no onChange
}
//todos os componentes que foram feitos connect e mapStateToProps terão seu estado modificado, ele irá saber que aqueles componentes
//estarão interessados nas mudanças do state.field
export default connect(mapStateToProps,mapDispatchToProps)(Field)