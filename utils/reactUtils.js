import React from 'react'


function childrenWhitProps(children, props){
    return React.Children.map(
        props.children,
        child => React.cloneElement(child, {...props}))
}

export { childrenWhitProps }