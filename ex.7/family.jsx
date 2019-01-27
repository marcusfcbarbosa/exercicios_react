import React from 'react'

//quando se definir o seu componente family, em algum lugar,...tudo que vc passar dentro dele sera passado para esse props.children

export default props => (
    <div>
        {props.children}
    </div>
)