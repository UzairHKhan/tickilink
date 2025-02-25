import styled from "styled-components";
// import arrowSVG from "../../public/services/Vector.svg";
import digitalServices from "../images/digitalServices.png";
import aboutImg from "../images/about.png";
import RoundButton from "./commons/RoundButton";
import AnimatedButton from "./commons/AnimatedButton";
const servicesData = [
  {
    img: digitalServices,
    text: "Digital Services",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae purus faucibus velit est a. Posuere volutpat blandit lectus nisl vitae lacus a",
  },
  {
    img: digitalServices,
    text: "Digital Services",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae purus faucibus velit est a. Posuere volutpat blandit lectus nisl vitae lacus a",
  },
  {
    img: digitalServices,
    text: "Digital Services",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae purus faucibus velit est a. Posuere volutpat blandit lectus nisl vitae lacus a",
  },
  {
    img: digitalServices,
    text: "Digital Services",
    description:
      "Lorem ipsum dolor sit amet consectetur. Vitae purus faucibus velit est a. Posuere volutpat blandit lectus nisl vitae lacus a",
  },
];
const About = () => {
  return (
    <AboutContainer className="wrapper">
      <Services>What We Do</Services>
      <ServiceContent>
        <TextContentWrapper>
          <Title>Our software development and consulting services</Title>
          <TextContent>
            Lorem ipsum dolor sit amet consectetur. Vitae purus faucibus velit
            est a. Posuere volutpat blandit lectus nisl vitae lacus a gravida
            nibh. Aliquam morbi sociis donec gravida vel et Luctus faucibus sit
            leo.
            <ul>
              <li>
                Custom Software Development: Tailored solutions to fit your
                unique business requirements.
              </li>
              <li>
                UI/UX Design: Crafting intuitive and user-friendly interfaces
                for enhanced user experiences.
              </li>
              <li>
                Web and Mobile App Development: Scalable, secure, and
                high-performing applications.
              </li>
              <li>
                Cloud Integration: Seamlessly migrate and integrate your systems
                with cloud technologies.
              </li>
              <li>
                IT Consulting: Expert advice to optimize your processes and
                technology stack.
              </li>
              <li>
                Maintenance and Support: Reliable post-launch support for
                ongoing success.
              </li>
              <li>
                Agile Methodology: Ensuring flexibility, transparency, and
                timely project delivery.
              </li>
            </ul>
          </TextContent>
        </TextContentWrapper>
        <ServicesWrapper>
          {servicesData.map((item, idx) => (
            <div key={idx}>
              <ServiceItem>
                <img
                  src={item.img}
                  alt={item.text || "Service image"}
                  height={"100px"}
                  width={"150px"}
                />
                <div>
                  <ServiceHeading>{item.text}</ServiceHeading>
                  <ServiceDescription>{item.description}</ServiceDescription>
                </div>
                {/* <RoundButton /> */}
              </ServiceItem>
              <Divider />
            </div>
          ))}
        </ServicesWrapper>
      </ServiceContent>
    </AboutContainer>
  );
};

export default About;

const AboutContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin-top: 32px;
  ul {
    margin-left: 20px;
    margin-top: 44px;
  }
`;

const Services = styled.div`
  color: #f0a351;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
`;

const Title = styled.div`
  color: #ffffff;
  /* width: 698px; */
  /* height: 120px; */
  font-family: "Sharp Grotesk";
  font-size: 28px;
  font-weight: 600;
  margin-top: 22px;
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
`;

const TextContentWrapper = styled.div`
  max-width: 50%;
  @media screen and (max-width: 800px) {
    max-width: 100%;
  }
`;

const TextContent = styled.div`
  color: #8b8b8b;
  font-family: Manrope;
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  /* width: 636px;
  height: 420px; */
  margin-top: 22px;
  margin-bottom: 75px;
`;

const ServiceContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: space-between;
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45%;
  row-gap: 50px;
  @media screen and (max-width: 800px) {
    max-width: 100%;
  }
`;

const Divider = styled.hr`
  margin-top: 25px;
  border: 1px solid #373737;
`;

const ServiceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const ServiceHeading = styled.p`
  font-family: Sharp Grotesk;
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  @media screen and (max-width: 958px) {
    font-size: 18px;
  }
`;

const ServiceDescription = styled.p`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 400;
  margin-top: 8px;
  color: #8b8b8b;
  @media screen and (max-width: 958px) {
    font-size: 12px;
  }
`;
