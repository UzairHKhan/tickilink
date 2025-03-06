import styled from "styled-components";
import Hero from "./hero";
import Navbar from "./navbar";
import About from "./about";
import Service from "./service";
import Career from "./career";
import banner from "../images/banner.svg";
import Portfolio from "./portfolio";
import Testimonial from "./testimonial";
import Plans from "./Plans";

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
      {/* <Career /> */}
      <Plans />
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
  overflow-x: hidden;
`;

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  height: 300px;
  @media screen and (max-width: 1240px) {
    height: 250px;
  }
  @media screen and (max-width: 1024px) {
    height: 220px;
  }
  @media screen and (max-width: 768px) {
    height: 200px;
  }
  @media screen and (max-width: 480px) {
    height: 150px;
  }
  @media screen and (max-width: 360px) {
    height: 100px;
  }
  @media screen and (max-width: 425px) {
    height: 80px;
  }
`;

const Banner = styled.img`
  width: 100vw;
  /* scale: 1.1; */
`;
