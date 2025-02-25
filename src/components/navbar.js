import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import logo from "../images/logo.svg";
import { navItem } from "./data";
import AnimatedButton from "./commons/AnimatedButton";

const Navbar = () => {
  return (
    <Header id="header">
      <Nav>
        <div>
          <Image src={logo} alt="tickilinkLogo" height="70px" />
        </div>
        <NavItem>
          {navItem?.map((item, ind) => {
            return <li key={ind}>{item}</li>;
          })}
        </NavItem>
        <AnimatedButtonWrapper>
          <AnimatedButton>Contact Us</AnimatedButton>
        </AnimatedButtonWrapper>
        <MobileMenu className="mobileMenu">
          <FaBars size={24} color="#fff" />
        </MobileMenu>
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
  padding: 12px 10px;
  align-items: center;
  margin: 0 auto;
  width: 90%;
`;
const NavItem = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 815px) {
    display: none;
  }
  li {
    cursor: pointer;
    padding: 12px;
    color: #fff;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
  li:hover {
    color: #f0a351;
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

const AnimatedButtonWrapper = styled.span`
  @media screen and (max-width: 815px) {
    display: none;
  }
`;

const MobileMenu = styled.button`
  display: block;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  @media screen and (min-width: 815px) {
    display: none;
  }
`;

const Image = styled.img`
  @media screen and (max-width: 815px) {
    height: 50px;
  }
`;