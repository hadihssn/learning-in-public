import { useState, useEffect } from 'react'

function App() {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

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