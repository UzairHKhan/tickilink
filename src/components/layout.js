import styled from "styled-components";
import Hero from "./hero";
import Navbar from "./navbar";
import About from "./about";
import Service from "./service";

const Layout = ({ chilldren }) => {
  return (
    <Containter>
      <Navbar />
      <Hero />
      <About />
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
