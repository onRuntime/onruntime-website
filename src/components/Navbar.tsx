import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
import { useTranslation } from "react-i18next";

import Link from "./Link";
import onRuntimeLogo from "assets/images/onruntime.svg";
import * as ROUTES from "constants/routes";
import FlagEnIcon from "assets/emojis/flag-en.png";

const Navbar: React.FC = () => {

    const [t] = useTranslation();
    const { pathname } = useLocation();

    return (
        <Container>
            <Brand href={ROUTES.HOME}>
                <BrandLogo src={onRuntimeLogo} draggable={false} height={48} width={48} />
                <BrandTitle>onRuntime</BrandTitle>
            </Brand>
            <Nav>
                <NavItem>
                    <NavLink href={ROUTES.PROJECTS} active={pathname === ROUTES.PROJECTS}>{t("main.projects")}</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href={ROUTES.ABOUT} active={pathname === ROUTES.ABOUT}>{t("main.about")}</NavLink>
                </NavItem>
            </Nav>
            <Lang>
                <LangImage src={FlagEnIcon} draggable={false} height={30} width={30} />
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
    filter: brightness(.75);
    transition: all .2s;

    :hover {
        filter: brightness(1);
    }
`;

const BrandLogo = styled.img`
    height: 30px;
    width: auto;
    transform: scale(.75);
`;

const BrandTitle = styled.h1`
    position: absolute;
    font-size: ${({ theme }) => theme.size.medium};
    right: -350%;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
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