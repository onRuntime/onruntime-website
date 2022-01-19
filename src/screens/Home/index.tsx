import styled from "styled-components";

import Head from "@components/Head";
import MainContainer from "@components/Layout/MainContainer";
import Button from "@components/Layout/Button";
import Link from "@components/Link";
import ProjectList from "@components/Project/List";
import ROUTES from "@constants/routes";

import projectsData from "@data/projects";
import useTranslation from "@hooks/useTranslation";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <Head title={t("home.head.title")} description={t("main.desc")} />
      <Container>
        <Featured>
          <FeaturedTitle>{t("home.featured.title")}</FeaturedTitle>
          <FeaturedDescription>{t("home.featured.desc")}</FeaturedDescription>
          <FeaturedButton href={ROUTES.ABOUT} outline>
            {t("home.featured.btn")}
          </FeaturedButton>
        </Featured>
        <About>
          <AboutCol>
            <AboutImage
              src={"https://picsum.photos/seed/picsum/1920/1080"}
              width={1920}
              height={1080}
              alt={"onRuntime Wallpaper"}
            />
          </AboutCol>
          <AboutCol>
            <AboutTitle>{t("home.about.title")}</AboutTitle>
            <AboutDescription>{t("home.about.desc")}</AboutDescription>
            <AboutButton href={ROUTES.ABOUT}>{t("home.about.btn")}</AboutButton>
          </AboutCol>
        </About>
        <Partners>
          <Link href={"https://droitaucoeurcoaching.com/"}>
            <PartnersImage
              src={"/static/images/partners/droitaucoeur_logo.png"}
              alt={"Droit au coeur"}
            />
          </Link>
          <Link href={"https://needfor-school.com"}>
            <PartnersImage
              src={"/static/images/partners/needforschool_logo.png"}
              alt={"Need for School"}
            />
          </Link>
          <Link href={"https://incomingwaves.com"}>
            <PartnersImage
              src={"/static/images/partners/waves_logo.png"}
              alt={"Incoming Waves"}
            />
          </Link>
        </Partners>
        <Projects>
          <ProjectsTitle>{t("home.projects.title")}</ProjectsTitle>
          <ProjectsDescription>{t("home.projects.desc")}</ProjectsDescription>
          <ProjectList data={projectsData.slice(0, 3)} />
          <ProjectsButton href={ROUTES.PROJECTS} outline>
            {t("home.projects.btn")}
          </ProjectsButton>
        </Projects>
      </Container>
    </MainContainer>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Featured = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 128px 0;
`;

const FeaturedTitle = styled.div`
  font-size: ${({ theme }) => theme.size.title};
  font-weight: ${({ theme }) => theme.weight.bold};
`;

const FeaturedDescription = styled.div`
  margin-top: 30px;
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const FeaturedButton = styled(({ children, ...props }) => (
  <Button as={Link} {...props}>
    {children}
  </Button>
))`
  margin-top: 30px;
`;

const About = styled.div`
  display: flex;
  line-height: 1.25;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
  }
`;

const AboutCol = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    align-items: center;
    text-align: center;
    padding: 10px 0;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const AboutTitle = styled.h2`
  font-size: ${({ theme }) => theme.size.large};
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const AboutDescription = styled.p`
  margin-top: 5px;
  opacity: 0.75;
`;

const AboutButton = styled(({ children, ...props }) => (
  <Button as={Link} {...props}>
    {children}
  </Button>
))`
  margin-top: 15px;
  width: 80%;
  :hover {
    color: ${({ theme }) => theme.colors.text.darkest};
  }
`;

const Partners = styled.div`
  margin-top: 96px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: 150px;
`;

const PartnersImage = styled.img`
  width: auto;
  height: 50px;
  filter: grayscale(1) brightness(0.8);
  transition: all 0.2s;

  :hover {
    filter: none;
  }
`;

const Projects = styled.div`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 1.25;
`;

const ProjectsTitle = styled.h2`
  font-size: ${({ theme }) => theme.size.title};
  font-weight: ${({ theme }) => theme.weight.bold};
`;

const ProjectsDescription = styled.p`
  margin-top: 30px;
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.weight.medium};
  max-width: 700px;
`;

const ProjectsButton = styled(({ children, ...props }) => (
  <Button as={Link} {...props}>
    {children}
  </Button>
))`
  margin-top: 50px;
`;

export default Home;
