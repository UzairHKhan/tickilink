import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";
import logo from "../images/logo.png";
import { navItem } from "./data";
import AnimatedButton from "./commons/AnimatedButton";

const Navbar = () => {
  return (
    <Header>
      <Nav className="wrapper">
        <div>
          <img src={logo} alt="tickilinkLogo" height='70px' />
        </div>
        <NavItem>
          {navItem?.map((item, ind) => {
            return <li key={ind}>{item}</li>;
          })}
        </NavItem>
        
        <div></div>
        <AnimatedButton>
          Contact Us
        </AnimatedButton>
      </Nav>
    </Header>
  );
};
export default Navbar;

const Header = styled.div`
  width: 100%;
  top: 0;
  background: #202020;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 24px 10px;
  align-items: center;
  margin: 0 auto;
`;
const NavItem = styled.ul`
  display: flex;
  list-style: none;
  li {
    cursor: pointer;
    padding: 10px 20px;
    color: #fff;
  }
  li:hover {
    color: #F0A351;
    border-radius: 2px;
  }
`;

// const ListItem = styled.li`
//   color: #fff;
// `

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
