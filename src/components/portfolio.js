import styled from "styled-components";
import PortfolioSwiper from "./commons/PortfolioSwiper";

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioTextWrapper>
        <PortfolioSection>Portfolio</PortfolioSection>
        <Title>Translating Technolo Into A Positive Impact</Title>
        <TextContent>
          We are proud of our work and the impact it has on our clients and their
          customers. We have worked with a variety of industries, from healthcare
          to finance, and we are always excited to take on new challenges.
        </TextContent>
      </PortfolioTextWrapper>
      <PortfolioSwiper />
    </PortfolioContainer>
  );
};

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;

const PortfolioSection = styled.div`
  color: #f0a351;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
`;

const Title = styled.div`
  color: #ffffff;
  font-family: "Sharp Grotesk";
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  margin-top: 22px;
  text-align: center;
`;
const TextContent = styled.div`
  color: #8b8b8b;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 22px;
  text-align: center;
`;

const PortfolioTextWrapper = styled.div`
  max-width: 550px;
  padding: 0 16px;
`;

export default Portfolio;
