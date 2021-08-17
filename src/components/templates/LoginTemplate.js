import { Button, Input, Heading, Container } from '@chakra-ui/react'



const LoginTemplate = () => {


  const handleLogin = async () => {
  }
  return (<>
    <Heading>Join ComEth</Heading>
    <Container>
    <Input
      placeholder="ID of your group"
      //value={}
      //onChange={(e) => setquelquechose(e.target.value)}
    />
    <Input
      placeholder="password of your group"
      //value={password}
      //onChange={(e) => setPasword(e.target.value)}
    />
    <Button onClick={handleLogin}>Login</Button>
    </Container></>);
  
}
export default LoginTemplate;

