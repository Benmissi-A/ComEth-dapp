import { Heading , Button } from "@chakra-ui/react";
import {Link} from "react-router-dom";

const HomeTemplate = () => {
  return (
    <>
      <Heading>Welcome Home</Heading>
      <Link to="/vote">
        <Button>Vote</Button>
      </Link>
      <Link to="/proposition">
        <Button>Propositions</Button>
      </Link>
      <Link to="/info">
        <Button>Info</Button>
      </Link>
    </>
  );
};
export default HomeTemplate;
