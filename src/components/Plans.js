import styled from "styled-components";
import PlanTile from "./commons/PlanTile";

const planData = [
  {
    title: "Hire a dedicated Developer",
    description: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit. Nullam ",
      "finibus posuere vestibulum. Phasellus",
      "laoreet ante volutpat",
    ],
  },
  {
    title: "Hire a dedicated Developer",
    description: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit. Nullam ",
      "finibus posuere vestibulum. Phasellus",
      "laoreet ante volutpat",
    ],
  },
  {
    title: "Hire a dedicated Developer",
    description: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit. Nullam ",
      "finibus posuere vestibulum. Phasellus",
      "laoreet ante volutpat",
    ],
  },
  {
    title: "Hire a dedicated Developer",
    description: [
      "Lorem ipsum dolor sit amet",
      "consectetur adipiscing elit. Nullam ",
      "finibus posuere vestibulum. Phasellus",
      "laoreet ante volutpat",
    ],
  },
];
const Plans = () => {
  return (
    <div className="wrapper">
      <PlansContainer>
        <PlanTileWrapper>
          {planData.map((plan) => (
            <PlanTile>
              <TileHeading>{plan.title}</TileHeading>
              {plan.description.map((desc) => (
                <ListItem>{desc}</ListItem>
              ))}
            </PlanTile>
          ))}
        </PlanTileWrapper>
        <TextContentWrapper>
          <SectionHeading>Plans</SectionHeading>
          <Title>Choose Your Engagement Model</Title>
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
      </PlansContainer>
    </div>
  );
};

const PlansContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  margin-top: 32px;
  gap: 24px;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1024px) {
    justify-content: center;
    flex-direction: column-reverse;
  }
`;

const TileHeading = styled.div`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 800;
  @media screen and (max-width: 1200px) {
    font-size: 11px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;

const ListItem = styled.li`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 8px;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;

const Title = styled.div`
  color: #ffffff;
  font-family: "Sharp Grotesk";
  font-size: 28px;
  font-weight: 600;
  margin-top: 8px;
  @media screen and (max-width: 800px) {
    font-size: 24px;
  }
`;

const TextContentWrapper = styled.div`
  max-width: 40%;
  @media screen and (max-width: 1165px) {
    max-width: 35%;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    max-width: 480px;
  }
`;

const TextContent = styled.div`
  color: #8b8b8b;
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  margin-top: 12px;
  ul {
    margin-left: 20px;
    margin-top: 44px;
  }
`;

const PlanTileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: 50%;
  min-width: 535px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    width: 40%;
    min-width: 480px;
    li {
      font-size: 10px;
    }
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    /* max-width: 550px; */
    li {
      font-size: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 350px;
  }
`;

const SectionHeading = styled.div`
  color: #f0a351;
  font-family: Manrope;
  font-size: 14px;
  font-weight: 700;
`;

export default Plans;
