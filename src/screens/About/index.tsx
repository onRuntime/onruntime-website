import React from "react";
import styled from "styled-components";

import Head from "@components/Head";
import Button from "@components/Layout/Button";
import MainContainer from "@components/Layout/MainContainer";
import MemberList from "@components/Member/List";

import membersData from "@data/members";
import useTranslation from "@hooks/useTranslation";

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const teamRef = React.createRef<any>();

  const handleClickToLeaders = () => {
    teamRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MainContainer>
      <Head title={t("about.head.title")} description={t("about.head.desc")} />
      <Container>
        <Intro>
          <IntroCol>
            <IntroSubtitle>{t("about.intro.subtitle")}</IntroSubtitle>
            <IntroTitle>{t("about.intro.title")}</IntroTitle>
            <IntroDescription>{t("about.intro.desc")}</IntroDescription>
            <IntroButton onClick={handleClickToLeaders}>
              {t("about.btn")}
            </IntroButton>
          </IntroCol>
          <IntroCol>
            <IntroImage
              src={"./static/images/logo/onruntime.svg"}
              alt={"onRuntime Logo"}
              width={1000}
              height={1000}
              draggable={false}
            />
          </IntroCol>
        </Intro>
        <Team ref={teamRef}>
          <TeamTitle>{t("about.team.title")}</TeamTitle>
          <MemberList data={membersData} />
        </Team>
      </Container>
    </MainContainer>
  );
};

const Container = styled.div`
  padding-top: 128px;
  line-height: 1.25;
`;

const Intro = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
  }
`;

const IntroCol = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  padding: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    align-items: center;
    text-align: center;
  }
`;

const IntroSubtitle = styled.h3`
  font-weight: ${({ theme }) => theme.weight.medium};
  text-transform: uppercase;
`;

const IntroTitle = styled.h1`
  margin-top: 15px;
  font-size: ${({ theme }) => theme.size.title};
  font-weight: ${({ theme }) => theme.weight.bold};
`;

const IntroDescription = styled.p`
  margin-top: 30px;
`;

const IntroButton = styled(Button)`
  margin-top: 30px;
`;

const IntroImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: 10px;
  align-self: flex-end;
  transform: scale(0.75);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    align-self: center;
  }
`;

const Team = styled.div`
  display: flex;
  flex-direction: column;
`;

const TeamTitle = styled.h2`
  font-size: ${({ theme }) => theme.size.title};
  font-weight: ${({ theme }) => theme.weight.bold};
  align-self: center;
  padding: 64px 0;
`;

export default Projects;
