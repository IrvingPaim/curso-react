import React from 'react'
import './MyForm.css'
import { useState } from 'react'

const MyForm = () => {
    // 3 - Gerenciamento de Dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value)
    }

    console.log(name)
    console.log(email)

    return (
        <div>
            {/* 1 - Criação de formulário */}
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="type your name" onChange={handleName} />
                </div>
                {/* Label envolvendo input */}
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" placeholder='type your e-mail' onChange={(e) => setEmail(e.target.value)} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm