import styled from "styled-components"
import PrimaryButton from "./PrimaryButton"
import RoundButton from "./RoundButton"


const AnimatedButton = ({children}) => {

    return (
        <ButtonsWrapper>
            <RoundButton />
            <PrimaryButton>{children}</PrimaryButton>
        </ButtonsWrapper>
    )
}

export default AnimatedButton

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 2px;
    align-items: center;
`;