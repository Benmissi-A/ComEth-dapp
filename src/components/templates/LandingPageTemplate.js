import { Link } from "react-router-dom";
import { Heading, Button } from "@chakra-ui/react";

const LandingPageTemplate = () => {
  return (
    <>
      <Heading>Landing</Heading>

      <Link to="/create">
        <Button colorScheme="blue">Create</Button>
      </Link>

      <Link to="/login">
        <Button colorScheme="blue">Login</Button>
      </Link>
    </>
  );
};
export default LandingPageTemplate;
