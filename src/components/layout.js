import styled from "styled-components";
import Hero from "./hero";
import Navbar from "./navbar";
import About from "./about";
import Service from "./service";
import Career from "./career";
import banner from "../images/banner.svg";
import Portfolio from "./portfolio";
import Testimonial from "./testimonial";

const Layout = ({ chilldren }) => {
  return (
    <Containter>
      <Navbar />
      <Hero />
      <About />
      <BannerWrapper>
        <Banner src={banner} alt="banner" />
      </BannerWrapper>
      <Portfolio />
      <Career />
      <Testimonial />
      {/* <Service /> */}
    </Containter>
  );
};

export default Layout;

const Containter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  height: 300px;
`;

const Banner = styled.img`
  width: 100vw;
  scale: 1.1;
`;
