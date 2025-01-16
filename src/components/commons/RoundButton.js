import styled from "styled-components";
import ArrowIcon from "../icons/ArrowIcon";
// import ArrorIcon from "../../images/icons/arrow.svg";

const RoundButton = () => {
  return (
    <Button className="round-button">
      <ArrowIcon />
    </Button>
  );
};

export default RoundButton;

const Button = styled.div`
  background: linear-gradient(90deg, #dd5901 0%, #fcd183 100%);
  border-radius: 50%;
  padding: 14px;
  border: none;
  color: #fff;
  cursor: pointer;
`;
