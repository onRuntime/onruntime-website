import React from "react";
import styled from "styled-components";
import BackgroundImage from "../assets/images/background.svg";

const Background: React.FC = () => (
    <Container>
        <Image src={BackgroundImage} />
    </Container>
);

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(30, 30, 30);
    user-select: none;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export default Background;