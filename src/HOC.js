import React from 'react'
import SpinnerComponent from './SpinnerComponent'

const HOC = WrappedComponent => {
    return function(props){
        return(
            props.isLoading ? <SpinnerComponent /> : <WrappedComponent {...props} />
        )
    }
}

export default HOC;