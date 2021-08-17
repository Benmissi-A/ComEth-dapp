import { Button, Input, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'

const CreateTemplate = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleCreate = async () => {
    //a créer  <-------
  }
  return (<>
  <Heading>Create ComEth</Heading>
  <Input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleCreate}>Login</Button>
  </>)
}
export default CreateTemplate