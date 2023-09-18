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

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('enviando o Formulário')
        console.log(name, email)
    }

    return (
        <div>
            {/* Envio de Form */}
            {/* 1 - Criação de formulário */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="type your name" onChange={handleName} />
                </div>
                {/* Label envolvendo input */}
                <label>
                    <span>E-mail:</span>
                    {/* Simplificação de Manipulação do State */}
                    <input type="email" name="email" placeholder='type your e-mail' onChange={(e) => setEmail(e.target.value)} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm