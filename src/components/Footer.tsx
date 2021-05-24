import React from "react";
import styled from "styled-components";
import Link from "./Link";

const Footer: React.FC = () => (
    <Container>
        <Social>
            <SocialItem><SocialLink href="https://linkedin.com/company/onruntime"><SocialIcon className="ri-linkedin-fill" /></SocialLink></SocialItem>
            <SocialItem><SocialLink href="https://github.com/onRuntime"><SocialIcon className="ri-github-fill" /></SocialLink></SocialItem>
            <SocialItem><SocialLink href="https://discord.gg/ucX9c5yXmX"><SocialIcon className="ri-discord-fill" /></SocialLink></SocialItem>
            <SocialItem><SocialLink href="https://twitter.com/onRuntime"><SocialIcon className="ri-twitter-fill" /></SocialLink></SocialItem>
            <SocialItem><SocialLink href="https://instagram.com/onruntime"><SocialIcon className="ri-instagram-fill" /></SocialLink></SocialItem>
        </Social>
    </Container>
);

const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
`;

const Social = styled.ul`
    display: flex;
    align-items: center;
`;

const SocialItem = styled.li`
    margin: 0 5px;
`;

const SocialLink = styled(Link)`
    font-size: ${({ theme }) => theme.size.large};
`;

const SocialIcon = styled.i``;

export default Footer;