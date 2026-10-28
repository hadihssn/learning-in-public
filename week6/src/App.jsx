import { useState, useEffect } from 'react'

function App() {

  // manage all states here
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  // handleSubmit function will live here
  
  const handleSubmit = async () => {
    fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({name, email})
    })
    .then(response => response.json())
    .then(data => {
      setUsers([...users, data[0]])
      setName('')
      setEmail('')
    })
  }
  

  // useEffect goes here
  useEffect(() => {
    fetch('http://localhost:4000/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data)
      setLoading(false)
    })
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={handleSubmit}>Add User</button>

      <h1>Users</h1>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name} - {user.email}</p>
        </div>
      ))}
    </div>
  )
}

export default App