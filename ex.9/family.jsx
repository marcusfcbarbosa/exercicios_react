import React from 'react'

//usando o spread para clonar o objeto
//usando dessa forma {React.cloneElement(props.children, { ...props})}  
//Só funciona para um unico elemento, mas não para varios elementos
export default props => (
    <div>
        <h1>Familia</h1>
            {React.cloneElement(props.children, { ...props})}  
            
    </div>
)