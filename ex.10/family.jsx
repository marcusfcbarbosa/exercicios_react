import React from 'react'

//fazer um mapeamento que pega os elementos do filho e retorna como propriedade da familia 
// {React.children.map(props.children, 
//     child => React.cloneElement(child,{ ...props}) isso daqui é um callback
//     )}
export default props => (
    <div>
        <h1>Familia</h1>
            {React.Children.map(
                props.children,
                child => React.cloneElement(child,{...props})
            )}
    </div>
)