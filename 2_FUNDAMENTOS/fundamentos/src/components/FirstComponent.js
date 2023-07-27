// arquivo de estilo

import MyComponent from "./MyComponent"

const FirstComponent = () => {
// essa função faz isso
    return (
        <div>
            {/* Algum comentário */}
            <h1>Meu Primeiro Componente</h1>
            <p className="teste">Meu Texto</p>
            <MyComponent />
        </div>  
    )
}

export default FirstComponent