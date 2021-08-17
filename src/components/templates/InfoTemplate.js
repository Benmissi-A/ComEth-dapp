import { Heading, Button } from "@chakra-ui/react";
import {Link} from "react-router-dom"

const InfoTemplate = () => {
  return (
    <>
      <Heading>View Informations</Heading>
      <Link to="/home">
        <Button>Home</Button>
      </Link>
    </>
  );
}
export default InfoTemplate