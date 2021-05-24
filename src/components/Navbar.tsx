import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
import Link from "./Link";
import onRuntimeLogo from "assets/images/onruntime.png";
import * as ROUTES from "constants/routes";

const Navbar: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <Container>
            <Brand href={ROUTES.HOME}>
                <BrandLogo src={onRuntimeLogo} draggable={false} height={48} width={48} />
                <BrandTitle>onRuntime</BrandTitle>
            </Brand>
            <Nav>
                <NavItem>
                    <NavLink href={ROUTES.PROJECTS} active={pathname === ROUTES.PROJECTS}>
                        Projects
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href={ROUTES.ABOUT} active={pathname === ROUTES.ABOUT}>
                        Team
                    </NavLink>
                </NavItem>
            </Nav>
            <Lang>
                <LangImage src={"bruh"} draggable={false} height={30} width={30} />
            </Lang>
        </Container>
    );
};

const Container = styled.nav`
    display: flex;
    height: 60px;
    padding: 0 15px;
    align-items: center;
    user-select: none;
    justify-content: space-between;
`;

const Brand = styled(Link)`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
`;

const BrandLogo = styled.img`
    max-height: 80%;
    height: 100%;
    width: auto;
`;

const BrandTitle = styled.h1`
    position: absolute;
    font-size: ${({ theme }) => theme.size.medium};
    right: -200%;

    @media (max-width: ${({ theme }) => theme.breakpoint.normal}) {
        display: none;
    }
`;

const Nav = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
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

const NavLink = styled(Link) <{ active: boolean }>`
    position: relative;
    color: ${({ active, theme }) => (active ? theme.colors.text.lightest : theme.colors.text.light)};
    font-weight: ${({ active, theme }) => (active ? theme.weight.bold : theme.weight.normal)};
    display: flex;
    align-items: center;
`;

const Lang = styled(Link)`
    display: flex;
    align-items: center;
    margin-left: 10px;
`;

const LangImage = styled.img`
    max-height: 30px;
    height: auto;
    width: 30px;
`;

export default Navbar;