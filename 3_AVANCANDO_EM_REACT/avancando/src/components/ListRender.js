import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Irving", "Leila", "Heitor"])

    const [users, setUsers] = useState([
        {id: 1, name: "Irving", age: 39},
        {id: 2, name: "Leila", age: 36},
        {id: 3, name: "Heitor", age: 5}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)
        console.log(randomNumber)

        setUsers(prevUsers => {
            console.log(prevUsers)
            return prevUsers.filter(user => randomNumber !== user.id)
        })
    }

    return (
        <div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete Random User</button>
        </div>
    )
}

export default ListRender