import { Button, Input, Heading, Container } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'


const LoginTemplate = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const res = await axios.post('http://192.168.0.10:3333', {
      username: username,
      hash: password,
    })
    console.log(res)
  }
  return (<>
    <Heading>Join ComEth</Heading>
    <Container>
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
    <Button onClick={handleLogin}>Login</Button>
    </Container></>);
}
export default LoginTemplate;

