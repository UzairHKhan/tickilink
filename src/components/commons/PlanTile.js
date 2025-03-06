import styled from "styled-components";

const PlanTile = ({ children }) => {
  return <Tile>{children}</Tile>;
};

const Tile = styled.div`
  padding: 16px;
  border-radius: 10px;
  background: #1a1b1e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Manrope;
  color: #f0a351;
  min-height: 280px;
  cursor: pointer;
  &:hover {
    background: url("/plans-tile-bg.png"),
    linear-gradient(75.1deg, #DD5901 7.76%, #FCD183 130.24%);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: #fff;
  }
`;

export default PlanTile;