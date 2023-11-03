import ROUTES from "@constants/routes";
import useTranslation from "@hooks/useTranslation";
import { useRouter } from "next/dist/client/router";
import styled from "styled-components";

import Link from "../Link";

const Navbar: React.FC = () => {
  const router = useRouter();
  const { pathname, locale } = router;
  const { t } = useTranslation();

  return (
    <Container>
      <Brand href={ROUTES.HOME}>
        <BrandLogo
          src={"/static/images/logo/onruntime.svg"}
          draggable={false}
          height={48}
          width={48}
        />
        <BrandTitle>{"onRuntime"}</BrandTitle>
      </Brand>
      <Nav>
        <NavItem>
          <NavLink
            href={ROUTES.PROJECTS}
            active={pathname.includes(ROUTES.PROJECTS)}
          >
            {t("main.projects")}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={ROUTES.ABOUT} active={pathname === ROUTES.ABOUT}>
            {t("main.about")}
          </NavLink>
        </NavItem>
      </Nav>
      <Lang href={pathname} locale={locale === "en" ? "fr" : "en"}>
        <LangImage
          src={`/static/images/emojis/flag-${locale}.png`}
          draggable={false}
          height={30}
          width={30}
        />
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
  filter: brightness(0.75);
  transition: all 0.2s;

  :hover {
    filter: brightness(1);
  }
`;

const BrandLogo = styled.img`
  height: 30px;
  width: auto;
  transform: scale(0.75);
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

const NavLink = styled(Link)<{ active: boolean }>`
  position: relative;
  color: ${({ active, theme }) =>
    active ? theme.colors.text.lightest : theme.colors.text.light};
  font-weight: ${({ active, theme }) =>
    active ? theme.weight.bold : theme.weight.regular};
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
