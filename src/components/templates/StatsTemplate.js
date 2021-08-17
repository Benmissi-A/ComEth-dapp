import { Heading } from "@chakra-ui/react";
import {Link} from "react-router-dom"

const StatsTemplate = () => {
  return (
    <>
      <Heading>Stats</Heading>
       <Link to="/home">Home</Link>
    </>
  );
};
export default StatsTemplate;
