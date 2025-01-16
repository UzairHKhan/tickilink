import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import logo from "../images/logo.png";
import { navItem } from "./data";

const Navbar = () => {
  return (
    <Header>
      <Nav className="wrapper">
        <div>
          <img src={logo} alt="fullexaLogo" />
        </div>
        <NavItem>
          {navItem?.map((item, ind) => {
            return <li key={ind}>{item}</li>;
          })}
        </NavItem>
        <Button>
          Consultancy <FaArrowRight />
        </Button>
      </Nav>
    </Header>
  );
};
export default Navbar;

const Header = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  margin: 0 auto;
`;
const NavItem = styled.ul`
  display: flex;
  list-style: none;
  li {
    cursor: pointer;
    padding: 10px 20px;
  }
  li:hover {
    background: #ea5818;
    color: white;
    border-radius: 2px;
  }
`;

const Button = styled.div`
  background: #ea5818;
  border-radius: 5px;
  padding: 20px 30px;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;
