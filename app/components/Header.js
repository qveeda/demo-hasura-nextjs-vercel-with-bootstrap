import { withRouter } from "next/router";
import { Navbar } from "react-bootstrap";
import LogoutBtn from "./Auth/Logout";

const Header = () => (
  <Navbar className="justify-content-between navBar">
    <Navbar.Brand className="navBrand">GraphQL Tutorial App!</Navbar.Brand>
    <Navbar.Collapse className="justify-content-end navContainer navButton">
      <LogoutBtn />
    </Navbar.Collapse>
  </Navbar>
);

export default withRouter(Header);
