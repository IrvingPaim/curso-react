import { useState } from "react"

const CondicionalRender = () => {
    const [x] = useState(false)

    const [name, setName] = useState("João")



    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>se x for true, sim!</p>}
            {!x && <p>Agora x é falso!</p>}
            <h1>If ternário</h1>
            {name === "Irving" ? (
            <div>
                <p>Gostoso</p>
            </div>
        ) : (
            <div>
                <p>Zé Ninguém</p>
            </div>
        )}
        <button onClick={() => setName("Irving")}>Clica aqui</button>
        </div>
    )
}

export default CondicionalRender