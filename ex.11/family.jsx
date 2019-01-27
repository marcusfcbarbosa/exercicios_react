import React from 'react'
import { childrenWhitProps }  from '../utils/reactUtils'

export default props => (
    <div>
        <h1>Familia</h1>
            { childrenWhitProps(props.children , props) }
    </div>
)