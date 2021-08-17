import { Button, Input, Heading } from '@chakra-ui/react'
import { useState } from 'react'

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
        width="sm"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder="password"
        value={password}
        width="sm"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleCreate}>Create your account</Button>
  </>)
}
export default CreateTemplate