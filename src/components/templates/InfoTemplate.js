import { Heading, Button } from "@chakra-ui/react";
import {Link} from "react-router-dom"

const InfoTemplate = () => {
  return (
    <>
      <Heading>View Informations</Heading>

      <Link to="/stats">
        <Button>Stats</Button>
      </Link>
      <Link to="/budget">
        <Button>Budget</Button>
      </Link>
      <Link to="/people">
        <Button>Info</Button>
      </Link>
      <Link to="/home">
        <Button>Home</Button>
      </Link>
    </>
  );
}
export default InfoTemplate