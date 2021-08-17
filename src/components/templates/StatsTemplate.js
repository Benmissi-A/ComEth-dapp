import { Heading, Button } from "@chakra-ui/react";
import {Link} from "react-router-dom"

const StatsTemplate = () => {
  return (
    <>
      <Heading>View Stats</Heading>
      <Link to="/home">
        <Button>Home</Button>
      </Link>
    </>
  );
};
export default StatsTemplate;
