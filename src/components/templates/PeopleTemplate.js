import { Heading,Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PeopleTemplate = () => {
  return (
    <>
      <Heading>View People</Heading>
      <Link to="/home">
        <Button>Home</Button>
      </Link>
    </>
  );
};
export default PeopleTemplate;
