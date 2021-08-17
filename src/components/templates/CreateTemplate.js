import { Button, Input, Heading, Container } from '@chakra-ui/react'
import { useState } from 'react'

const CreateTemplate = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleCreate = async () => {
    //a créer  <-------
  }
  return (<>
    <Heading>Create ComEth</Heading>
    <Container >
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
      <Button onClick={handleCreate}>Create your account</Button>
    </Container>
  </>)
}
export default CreateTemplate