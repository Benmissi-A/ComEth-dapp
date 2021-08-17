import { Button, Input, Heading, Container } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const LoginTemplate = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await axios.post("http://192.168.0.10:3333", {
      username: username,
      hash: password,
    });
    console.log(res);
  };
  return (
    <>
      <Heading>Join ComEth</Heading>
      <Input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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
    
    </Container> 
          <Input
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
    
          <Link to="/home">
            <Button onClick={handleLogin}>Join Community</Button>
          </Link>
        </>
      );
};
export default LoginTemplate;
