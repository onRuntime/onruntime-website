import Head from "@components/Head";
import Button from "@components/Layout/Button";
import MainContainer from "@components/Layout/MainContainer";
import useTranslation from "@hooks/useTranslation";
import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import is from "is_js";
import Link from "@components/Link";

const InstagramDark: NextPage = () => {
  const { t } = useTranslation();

  const [browser, setBrowser] = React.useState<{
    name: string | null;
    link: string;
  }>({
    name: null,
    link: "https://chrome.google.com/webstore/detail/instagram-dark-theme/hhpaefgagkcciebgfdmoljlebdmpfcfb",
  });

  React.useEffect(() => {
    if (is.firefox()) {
      setBrowser({
        name: "Firefox",
        link: "https://addons.mozilla.org/fr/firefox/addon/instagram-dark-theme",
      });
    } else if (is.edge()) {
      setBrowser({
        name: "Edge",
        link: "https://microsoftedge.microsoft.com/addons/detail/instagram-dark-theme/dhpoocfaphdchlaabhnacbffnacpagoj",
      });
    } else if (is.chrome()) {
      setBrowser({
        name: "Chrome",
        link: "https://chrome.google.com/webstore/detail/instagram-dark-theme/hhpaefgagkcciebgfdmoljlebdmpfcfb",
      });
    }
  }, []);

  return (
    <>
      <Background />
      <MainContainer>
        <Head
          title={"Projects"}
          subtitle={"Instagram Dark"}
          description={t("projects.list.instagramdark.desc")}
        />
        <Container>
          <Title>{"Instagram Dark"}</Title>
          <Description>{t("projects.list.instagramdark.desc")}</Description>
          <DownloadButton href={browser.link} outline>{`${t(
            "projects.list.instagramdark.download"
          )} ${
            browser.name
              ? `${t("projects.list.instagramdark.for")} ${browser.name}*`
              : `${t("projects.list.instagramdark.now")}*`
          }`}</DownloadButton>
          <Available>{t("projects.list.instagramdark.available")}</Available>
          <Video playsInline autoPlay loop muted>
            <source
              src="/static/videos/instagram-dark-theme-demo-video.mp4"
              type="video/mp4"
            />
          </Video>
        </Container>
      </MainContainer>
    </>
  );
};

const Background = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.layout.darkest};
`;

const Container = styled.div`
  margin-top: 128px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 1.25;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.title};
  font-weight: ${({ theme }) => theme.weight.bold};
`;

const Description = styled.p`
  margin-top: 30px;
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.weight.medium};
  max-width: 700px;
`;

const DownloadButton = styled(({ children, ...props }) => (
  <Button as={Link} {...props}>
    {children}
  </Button>
))`
  margin-top: 30px;
`;

const Available = styled.span`
  margin-top: 15px;
  font-size: ${({ theme }) => theme.size.tiny};
  color: ${({ theme }) => theme.colors.text.light};
`;

const Video = styled.video`
  margin-top: 30px;
  height: 500px;
  width: 100%;
  max-width: 700px;
`;

export default InstagramDark;
