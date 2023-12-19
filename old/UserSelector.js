import React, { useState } from 'react'

const UserSelector = ({ users, onSelectUser }) => {
    const [selectedUserId, setSelectedUserId] = useState(null)

    const handleUserChange = (event) => {
        const userId = parseInt(event.target.value, 10)
        setSelectedUserId(userId)
        onSelectUser(userId)
    }

    return (
        <div>
            <label htmlFor="userSelect">Select User: </label>
            <select
                id="userSelect"
                onChange={handleUserChange}
                value={selectedUserId || ''}
            >
                <option value="0">All user</option>
                {users.map((user) => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default UserSelector
