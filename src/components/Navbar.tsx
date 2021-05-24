import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
import Link from "./Link";
import ShadowBonusLogo from "assets/images/shadowbonus.svg";

const Navbar: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <Container>
            <Content>
                <LogoContainer>
                    <Link href="/">
                        <Logo src={ShadowBonusLogo} draggable={false} />
                    </Link>
                </LogoContainer>
                <Nav>
                    <NavItem>
                        <NavLink href="/" active={pathname}>
                            <NavIcon className="ri-gift-fill" />
                            Bonus
                        </NavLink>
                    </NavItem>
                    {/* <NavItem><NavLink soon><NavIcon className="ri-money-dollar-circle-fill" /> Machines à sous</NavLink></NavItem> */}
                    <NavItem>
                        <NavLink soon={true}>
                            <NavIcon className="ri-star-half-fill" />
                            Avis Casino
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={"https://streamelements.com/vitapvpey/store"}>
                            <NavIcon className="ri-vip-diamond-fill" />
                            Concours
                        </NavLink>
                    </NavItem>
                </Nav>
                <NavX className="ri-menu-4-fill" />
            </Content>
        </Container>
    );
};

const Container = styled.nav`
    display: flex;
    height: 80px;
    align-items: center;
    user-select: none;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1224px;
    width: calc(100% - 15px * 2);
    padding: 0 15px;
    margin: 0 auto;
`;

const LogoContainer = styled.div`
    height: 80px;
    width: 135px;
    transition: all .2s;
    cursor: pointer;
    :hover {
        transform: scale(1.05);
    }
`;

const Logo = styled.img`
    height: 100%;
    width: 100%;
`;

const Nav = styled.ul`
    display: flex;
    @media (max-width: 768px) {
        display: none;
    }
`;

const NavItem = styled.li`
    margin: 0 15px;

    :first-child {
        margin-left: 0;
    }

    :last-child {
        margin-right: 0;
    }
`;

const NavLink = styled(Link) <{ active?: boolean; soon?: boolean }>`
    position: relative;
    color: ${({ active }) => (active ? "rgb(72, 255, 123)" : "rgb(150, 150, 150)")};
    font-weight: ${({ active }) => (active ? "600" : "400")};
    display: flex;
    align-items: center;

    ${({ soon }) => (soon && `
        filter: brightness(0.6);
        cursor: initial;

        :hover {
            color: rgb(150, 150, 150);
        }
    `)};
`;

const NavIcon = styled.i`
    margin-right: 8px;
`;

const NavX = styled.i`
    font-size: 25px;
    display: none;
    @media (max-width: 768px) {
        display: block;
    }
`;

export default Navbar;