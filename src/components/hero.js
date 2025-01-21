import { useEffect, useState } from "react";
import styled from "styled-components";

const Hero = () => {
  const [headerHeight, setHeaderHeight] = useState(100);

  useEffect(() => {
    const header = document.getElementById("header");
    const headerHeight = header.offsetHeight;
    setHeaderHeight(headerHeight);
  }, [])

  return (
    <Section headerHeight={headerHeight} className="wrapper">
      <video width="100%" autoPlay loop muted>
        <source src="/intro-video.mp4" type="video/mp4" />
        Yo browser does not support the video format.
      </video>
    </Section>
  );
};

export default Hero;

// Styled Components
const Section = styled.section`
  margin: 32px 0;
  border-radius: 12px;
  overflow: hidden;
  video {
    scale: 1.35;
  }
  `;
