function UserForm({name, setName, email, setEmail, handleSubmit}) {
    return (
        <>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full name"/>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            <button onClick={handleSubmit}>Add User</button>
        
        </>
    )
}

export default UserForm