//
import background from "../assets/login.jpeg"
import styled from "styled-components"

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    img{
        height: 100vh;
        width: 100vw
    }
`;
function BackgroundImage() {
    return <Container>
        <img src={background} alt="" />
    </Container>
}

export default BackgroundImage