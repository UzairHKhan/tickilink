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
        {planData.map((plan) => (
          <PlanTile>
            <TileHeading>{plan.title}</TileHeading>
            {plan.description.map((desc) => (
              <ListItem>{desc}</ListItem>
            ))}
          </PlanTile>
        ))}
      </PlansContainer>
    </div>
  );
};

const PlansContainer = styled.div`
  max-width: 375px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  margin-top: 32px;
  gap: 16px;
  justify-content: center;
`;

const TileHeading = styled.div`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 800;
`;

const ListItem = styled.li`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 8px;
`;

export default Plans;
