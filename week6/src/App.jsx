import { useState, useEffect } from 'react'
import UserList from './components/UserList'
import UserForm from './components/UserForm'

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
      <UserForm  
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />

      <h1>Users</h1>
      <UserList users={users} />
    </div>
  )
}

export default App