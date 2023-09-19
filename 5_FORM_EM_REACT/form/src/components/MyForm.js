import React from 'react'
import './MyForm.css'
import { useState } from 'react'

const MyForm = ({user}) => {
    // 6 - Controlled Inputs
    // 3 - Gerenciamento de Dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')

    const [bio, setBio] = useState(user ? user.bio : "")

    const [role, setRole] = useState(user ? user.role : "")

    const handleName = (e) => {
        setName(e.target.value)
    }

    console.log(name)
    console.log(email)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('enviando o Formulário')
        console.log(name, email, bio, role)

        // 7 - Limpar Form
        setName("")
        setEmail("")
        setBio("")
        setRole("")
    }

    return (
        <div>
            {/* Envio de Form */}
            {/* 1 - Criação de formulário */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="type your name" value={name} onChange={handleName} />
                </div>
                {/* Label envolvendo input */}
                <label>
                    <span>E-mail:</span>
                    {/* Simplificação de Manipulação do State */}
                    <input type="email" name="email" placeholder='type your e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                {/* 8 - TextArea */}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder="Descrição do Usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>
                {/* 9 - Select */}
                <label>
                    <span>Função do Sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm