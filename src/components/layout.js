import styled from "styled-components";
import Hero from "./hero";
import Navbar from "./navbar";
import About from "./about";
import Service from "./service";
import Career from "./career";

const Layout = ({ chilldren }) => {
  return (
    <Containter>
      <Navbar />
      <Hero />
      <About />
      <Career />
      <Service />
    </Containter>
  );
};

export default Layout;

const Containter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
