import styled from "styled-components";

import onRuntimeAnimatedLogo from "assets/images/onruntime-animated.gif";

const Loading: React.FC = () => {
    return (
        <Container>
            <Logo src={onRuntimeAnimatedLogo} alt={"onRuntime Animated Logo"} draggable={false} />
        </Container>
    );
};

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(30, 31, 32);
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
`;

const Logo = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    filter: contrast(1.02);
`;

export default Loading;