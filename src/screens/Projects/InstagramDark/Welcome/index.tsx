import Head from "@components/Head";
import Button from "@components/Layout/Button";
import MainContainer from "@components/Layout/MainContainer";
import useTranslation from "@hooks/useTranslation";
import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import is from "is_js";
import Link from "@components/Link";

const Welcome: NextPage = () => {
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
          <Video
            width="1920"
            height="1080"
            src="https://www.youtube.com/embed/lTHWX66-kUg?controls=0&mute=1&showinfo=0&rel=0&autoplay=1&loop=1&playlist=lTHWX66-kUg"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          />
          <SocialList>
            <SocialLink href="https://linkedin.com/company/onruntime">
              <Linkedin>
                <SocialIcon className={"ri-linkedin-box-fill"} />
                <SocialTitle>{"LinkedIn"}</SocialTitle>
              </Linkedin>
            </SocialLink>
            <SocialLink href="https://github.com/onRuntime">
              <Github>
                <SocialTitle>
                  <SocialIcon className={"ri-github-fill"} />
                  {"Github"}
                </SocialTitle>
              </Github>
            </SocialLink>
            <SocialLink href="https://discord.gg/ucX9c5yXmX">
              <Discord>
                <SocialIcon className={"ri-discord-fill"} />
                <SocialTitle>{"Discord"}</SocialTitle>
              </Discord>
            </SocialLink>
            <SocialLink href="https://twitter.com/onRuntime">
              <Twitter>
                <SocialIcon className={"ri-twitter-fill"} />
                <SocialTitle>{"Twitter"}</SocialTitle>
              </Twitter>
            </SocialLink>
            <SocialLink href="https://instagram.com/onruntime">
              <Instagram>
                <SocialIcon className={"ri-instagram-fill"} />
                <SocialTitle>{"Instagram"}</SocialTitle>
              </Instagram>
            </SocialLink>
          </SocialList>
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

const Video = styled.iframe`
  margin-top: 30px;
  height: 500px;
  width: 100%;
  max-width: 700px;
`;

const SocialList = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  padding-bottom: 50px;
  align-items: center;
  padding: 100px 15px 0;
  width: calc(100% - 15px * 2);
`;

const SocialLink = styled(Link)`
  display: flex;
  margin-bottom: 10px;
`;

const SocialIcon = styled.i`
  margin-right: 5px;
`;

const SocialTitle = styled.h2`
  font-weight: ${({ theme }) => theme.weight.medium};
  display: flex;
  align-items: center;
`;

const Linkedin = styled(Button)`
  padding: 1rem 2rem;
  width: 100%;
  background-color: #0b65c2;
  color: ${({ theme }) => theme.colors.text.lightest};
  margin-right: 10px;
`;

const Github = styled(Button)`
  padding: 1rem 2rem;
  width: 100%;
  background-color: #2b3137;
  color: ${({ theme }) => theme.colors.text.lightest};
  margin-right: 10px;
`;

const Discord = styled(Button)`
  padding: 1rem 2rem;
  width: 100%;
  background-color: #404eed;
  color: ${({ theme }) => theme.colors.text.lightest};
  margin-right: 10px;
`;

const Twitter = styled(Button)`
  padding: 1rem 2rem;
  width: 100%;
  background-color: #1c9bef;
  color: ${({ theme }) => theme.colors.text.lightest};
  margin-right: 10px;
`;

const Instagram = styled(Button)`
  padding: 1rem 2rem;
  width: 100%;
  background-color: #dd2a7b;
  color: ${({ theme }) => theme.colors.text.lightest};
`;

export default Welcome;
