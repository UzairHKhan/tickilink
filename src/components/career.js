import styled from "styled-components";
// import arrowSVG from "../../public/services/Vector.svg";

import AnimatedButton from "./commons/AnimatedButton";

const careerData = [
  "Custom Software Development: Tailored solutions to fit your unique business requirements.",
  "Custom Software Development: Tailored solutions to fit your unique business requirements.",
  "UI/UX Design: Crafting intuitive and user-friendly interfaces for enhanced user experiences.",
  "Web and Mobile App Development: Scalable, secure, and high-performing applications.",
  "Cloud Integration: Seamlessly migrate and integrate your systems with cloud technologies.",
  "IT Consulting: Expert advice to optimize your processes and technology stack.",
  "Maintenance and Support: Reliable post-launch support for ongoing success.",
  "Agile Methodology: Ensuring flexibility, transparency, and timely project delivery.",
];

const Career = () => {
  return (
    <CareerContainer className="wrapper">
      <CareerSection>Career</CareerSection>
      <CareerContent>
        <div>
          <Title>Take your career to the next level</Title>
          <TextContent>
            Lorem ipsum dolor sit amet consectetur. Vitae purus faucibus velit
            est a. Posuere volutpat blandit lectus nisl vitae lacus a gravida
            nibh. Aliquam morbi sociis donec gravida vel et Luctus faucibus sit
            leo.
            <ul>
              {careerData.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </TextContent>
          <AnimatedButton>Explore More</AnimatedButton>
        </div>
        <CareerVideo>
          <video width="100%" height="724px" autoPlay loop muted>
            <source src="/career-video.mp4" type="video/mp4" />
            Yo browser does not support the video format.
          </video>
        </CareerVideo>
      </CareerContent>
    </CareerContainer>
  );
};

export default Career;

const CareerContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 896px;
  margin-top: 108px;
  column-gap: 116px;
  ul {
    margin-left: 20px;
    margin-top: 44px;
  }
`;

const CareerSection = styled.div`
  color: #f0a351;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
`;

const Title = styled.div`
  color: #ffffff;
  width: 698px;
  height: 120px;
  font-family: "Sharp Grotesk";
  font-size: 48px;
  font-weight: 600;
  line-height: 60px;
  margin-top: 22px;
`;
const TextContent = styled.div`
  color: #8b8b8b;
  font-family: Manrope;
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
  width: 636px;
  height: 420px;
  margin-top: 22px;
  margin-bottom: 100px;
`;

const CareerContent = styled.div`
  display: flex;
`;

const CareerVideo = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* width: 838px; */
  /* row-gap: 50px; */
  margin-left: 110px;
  video {
    /* height: 740px; */
    /* background-color: #f0a351 !important; */
    border-radius: 30px;
    /* height: 724px; */
  }
`;
