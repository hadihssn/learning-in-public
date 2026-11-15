function UserList({ users }) {
    return (
        <>
        {users.map(user => (
        <div key={user.id}>
            <p>{user.name} - {user.email}</p>
        </div>
        ))}
        </>
    )
}

export default UserList