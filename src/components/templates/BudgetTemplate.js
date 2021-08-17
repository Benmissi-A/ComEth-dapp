import {Heading, Button} from "@chakra-ui/react"
import {Link} from "react-router-dom"

const BudgetTemplate = () => {
  return (
    <>
      <Heading>View Budget</Heading>
      <Link to="/home">
        <Button>Home</Button>
      </Link>
    </>
  );
}
export default BudgetTemplate