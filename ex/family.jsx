import React from 'react'


//usando dessa forma {React.cloneElement(props.children, props)}  ele consegue , por meio de herança repassar as propriedades que estao diretamente referencias em family
export default props => (
    <div>
        <h1>Familia</h1>
            {React.cloneElement(props.children, props)}  
    </div>
)