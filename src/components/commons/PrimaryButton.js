import styled from "styled-components";



const PrimaryButton = ({ children, onClick }) => {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  );
}

export default PrimaryButton;

const Button = styled.div`
    background: linear-gradient(90deg, #dd5901 0%, #fcd183 100%);
    border-radius: 24px;
    padding: 10px 16px;
    border: none;
    color: #fff;
    cursor: pointer;
    font-family: Manrope;
    font-size: 12px;
`
