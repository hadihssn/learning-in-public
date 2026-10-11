import { useState, useEffect } from 'react'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

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