import React from "react"
import './MyComponent.css'

const Mycomponent = () => {
    return (
        <div>
            <h1>CSS de componente</h1>
            <p>Este é o parágrafo do componente</p>
            <p className="my-comp-paragraph">Este tb é do componente</p>
        </div>
    )
}

export default Mycomponent