import Head from "@components/Head";
import Button from "@components/Layout/Button";
import MainContainer from "@components/Layout/MainContainer";
import Link from "@components/Link";
import useTranslation from "@hooks/useTranslation";
import { NextPage } from "next";
import React from "react";
import styled from "styled-components";

const Welcome: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Background />
      <MainContainer>
        <Head
          title={"Projects"}
          subtitle={"Instagram Dark"}
          description={t("projects.list.instagramdark.desc")}
          noIndex
          noFollow
        />
        <Container>
          <Logo
            src={"/static/images/projects/instagram-dark-extension-logo.png"}
            alt={"Instagram Dark Logo"}
            width={100}
            height={100}
          />
          <Header>
            <Title>{t("projects.list.instagramdark.welcome.thanks")}</Title>
            <Description>
              {t("projects.list.instagramdark.welcome.teamthanks")}
            </Description>
          </Header>
          <Video playsInline autoPlay loop muted>
            <source
              src={"/static/videos/instagram-dark-extension-demo-video.mp4"}
              type={"video/mp4"}
            />
          </Video>
          <ListWrapper>
            <Instruction>
              {t("projects.list.instagramdark.welcome.supportus")}
            </Instruction>
            <SocialList>
              <SocialButton
                href={"https://www.patreon.com/onruntime"}
                backgroundColor={"#ff424d;"}
              >
                <SocialContent>
                  <SocialIcon className={"ri-patreon-fill"} />
                  <SocialTitle>{"Patreon"}</SocialTitle>
                </SocialContent>
              </SocialButton>
              <SocialButton
                href={"https://github.com/onRuntime/instagram-dark-extension"}
                backgroundColor={"#2b3137;"}
              >
                <SocialContent>
                  <SocialIcon className={"ri-github-fill"} />
                  <SocialTitle>{"Github"}</SocialTitle>
                </SocialContent>
              </SocialButton>
            </SocialList>
          </ListWrapper>
          <ListWrapper>
            <Instruction>
              {t("projects.list.instagramdark.welcome.followus")}
            </Instruction>
            <SocialList>
              <SocialButton
                href={"https://twitter.com/onRuntime"}
                backgroundColor={"#1c9bef;"}
              >
                <SocialContent>
                  <SocialIcon className={"ri-twitter-fill"} />
                  <SocialTitle>{"Twitter"}</SocialTitle>
                </SocialContent>
              </SocialButton>
              <SocialButton
                href={"https://linkedin.com/company/onruntime"}
                backgroundColor={"#0b65c2;"}
              >
                <SocialContent>
                  <SocialIcon className={"ri-linkedin-fill"} />
                  <SocialTitle>{"LinkedIn"}</SocialTitle>
                </SocialContent>
              </SocialButton>
              <SocialButton
                href={"https://discord.gg/ucX9c5yXmX"}
                backgroundColor={"#404eed;"}
              >
                <SocialContent>
                  <SocialIcon className={"ri-discord-fill"} />
                  <SocialTitle>{"Discord"}</SocialTitle>
                </SocialContent>
              </SocialButton>
              <SocialButton
                href={"https://instagram.com/onruntime"}
                backgroundColor={"#dd2a7b;"}
              >
                <SocialContent>
                  <SocialIcon className={"ri-instagram-fill"} />
                  <SocialTitle>{"Instagram"}</SocialTitle>
                </SocialContent>
              </SocialButton>
            </SocialList>
          </ListWrapper>
          <ListWrapper>
            <Instruction>
              {t("projects.list.instagramdark.welcome.share")}
            </Instruction>
            <SocialList>
              <SocialButton
                href={
                  "https://twitter.com/intent/tweet?url=https://onruntime.com/projects/instagram-dark&text=Hey%20everyone%20!%20I%20just%20installed%20an%20amazing%20extension%20called%20Instagram%20Dark%20!%20Check%20it%20out:&via=onRuntime"
                }
                backgroundColor={"#1c9bef;"}
              >
                <SocialContent>
                  <SocialIcon className={"ri-twitter-fill"} />
                  <SocialTitle>{"Twitter"}</SocialTitle>
                </SocialContent>
              </SocialButton>
              <SocialButton
                href={
                  "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fonruntime.com%2Fprojects%2Finstagram-dark&amp;src=sdkpreparse"
                }
                backgroundColor={"#4267b2;"}
              >
                <SocialContent>
                  <SocialIcon className={"ri-facebook-box-fill"} />
                  <SocialTitle>{"Facebook"}</SocialTitle>
                </SocialContent>
              </SocialButton>
              <SocialButton
                href={
                  "https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fonruntime.com%2Fprojects%2Finstagram-dark"
                }
                backgroundColor={"#0b65c2;"}
              >
                <SocialContent>
                  <SocialIcon className={"ri-linkedin-fill"} />
                  <SocialTitle>{"LinkedIn"}</SocialTitle>
                </SocialContent>
              </SocialButton>
              <SocialButton
                href={
                  "https://tumblr.com/widgets/share/tool/preview?canonicalUrl=https%3A%2F%2Fonruntime.com%2Fprojects%2Finstagram-dark&title=&caption="
                }
                backgroundColor={"#011935;"}
              >
                <SocialContent>
                  <SocialIcon className={"ri-tumblr-fill"} />
                  <SocialTitle>{"Tumblr"}</SocialTitle>
                </SocialContent>
              </SocialButton>
              <SocialButton
                href={
                  "mailto:?body=https://onruntime.com/projects/instagram-dark"
                }
                backgroundColor={"#4b4b4c;"}
              >
                <SocialContent>
                  <SocialIcon className={"ri-mail-fill"} />
                  <SocialTitle>{"Email"}</SocialTitle>
                </SocialContent>
              </SocialButton>
            </SocialList>
          </ListWrapper>
          <Disclaimer>
            {t("projects.list.instagramdark.welcome.disclaimer")}
            <HereLink
              href={"https://github.com/onRuntime/instagram-dark-extension"}
            >
              {t("projects.list.instagramdark.welcome.here")}
            </HereLink>
            {"."}
          </Disclaimer>
        </Container>
      </MainContainer>
    </>
  );
};

const SocialButton = styled(({ children, ...props }) => (
  <Button as={Link} {...props}>
    {children}
  </Button>
))<{ backgroundColor: string }>`
  padding: 1rem 2rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.text.lightest};
  margin-right: 10px;
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor}`}
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-top: 5px;
    padding: 1rem;
  }
`;

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
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 1.25;
`;

const Header = styled.header`
  margin-top: 15px;
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

const Video = styled.video`
  margin-top: 30px;
  height: 500px;
  width: 100%;
  max-width: 700px;
`;

const Instruction = styled.span`
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.weight.semiBold};
`;

const Disclaimer = styled.span`
  font-size: ${({ theme }) => theme.size.tiny};
  color: ${({ theme }) => theme.colors.text.light};
  margin-top: 30px;
  max-width: 650px;
`;

const HereLink = styled(Link)`
  font-size: ${({ theme }) => theme.size.tiny};
  text-decoration: underline;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const SocialList = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  width: calc(100% - 15px * 2);
  margin-top: 10px;
`;

const SocialIcon = styled.i`
  margin-right: 5px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin-right: 0px;
  }
`;

const SocialContent = styled.div`
  font-weight: ${({ theme }) => theme.weight.medium};
  display: flex;
  align-items: center;
`;

const SocialTitle = styled.h2`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

export default Welcome;
