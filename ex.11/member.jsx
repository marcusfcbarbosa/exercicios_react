import React from   'react'

export default props =>(
    <div> {props.name} <strong>{props.lastName}</strong> </div>
)

//essas propriedades são transmitidas para os filhos do family, através do children