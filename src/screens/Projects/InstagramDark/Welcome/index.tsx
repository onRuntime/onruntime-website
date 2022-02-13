import Head from "@components/Head";
import Button from "@components/Layout/Button";
import MainContainer from "@components/Layout/MainContainer";
import useTranslation from "@hooks/useTranslation";
import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import Link from "@components/Link";

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
              src="/static/videos/instagram-dark-extension-demo-video.mp4"
              type="video/mp4"
            />
          </Video>
          <ListWrapper>
            <Instruction>
              {t("projects.list.instagramdark.welcome.supportus")}
            </Instruction>
            <SocialList>
              <SocialLink href="https://www.patreon.com/onruntime">
                <Patreon>
                  <SocialIcon className={"ri-patreon-fill"} />
                  <SocialTitle>{"Patreon"}</SocialTitle>
                </Patreon>
              </SocialLink>
              <SocialLink href="https://github.com/onRuntime/instagram-dark-extension">
                <Github>
                  <SocialTitle>
                    <SocialIcon className={"ri-github-fill"} />
                    {"Github"}
                  </SocialTitle>
                </Github>
              </SocialLink>
            </SocialList>
          </ListWrapper>
          <ListWrapper>
            <Instruction>
              {t("projects.list.instagramdark.welcome.followus")}
            </Instruction>
            <SocialList>
              <SocialLink href="https://twitter.com/onRuntime">
                <Twitter>
                  <SocialIcon className={"ri-twitter-fill"} />
                  <SocialTitle>{"Twitter"}</SocialTitle>
                </Twitter>
              </SocialLink>
              <SocialLink href="https://linkedin.com/company/onruntime">
                <Linkedin>
                  <SocialIcon className={"ri-linkedin-box-fill"} />
                  <SocialTitle>{"LinkedIn"}</SocialTitle>
                </Linkedin>
              </SocialLink>
              <SocialLink href="https://discord.gg/ucX9c5yXmX">
                <Discord>
                  <SocialIcon className={"ri-discord-fill"} />
                  <SocialTitle>{"Discord"}</SocialTitle>
                </Discord>
              </SocialLink>
              <SocialLink href="https://instagram.com/onruntime">
                <Instagram>
                  <SocialIcon className={"ri-instagram-fill"} />
                  <SocialTitle>{"Instagram"}</SocialTitle>
                </Instagram>
              </SocialLink>
            </SocialList>
          </ListWrapper>
          <ListWrapper>
            <Instruction>
              {t("projects.list.instagramdark.welcome.share")}
            </Instruction>
            <SocialList>
              <SocialLink href="https://twitter.com/intent/tweet?url=https://onruntime.com/projects/instagram-dark&text=Hey%20everyone%20!%20I%20just%20installed%20an%20amazing%20extension%20called%20Instagram%20Dark%20!%20Check%20it%20out:&via=onRuntime">
                <Twitter>
                  <SocialIcon className={"ri-twitter-fill"} />
                  <SocialTitle>{"Twitter"}</SocialTitle>
                </Twitter>
              </SocialLink>
              <SocialLink href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fonruntime.com%2Fprojects%2Finstagram-dark&amp;src=sdkpreparse">
                <Facebook>
                  <SocialIcon className={"ri-facebook-box-fill"} />
                  <SocialTitle>{"Facebook"}</SocialTitle>
                </Facebook>
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fonruntime.com%2Fprojects%2Finstagram-dark">
                <Linkedin>
                  <SocialIcon className={"ri-linkedin-fill"} />
                  <SocialTitle>{"LinkedIn"}</SocialTitle>
                </Linkedin>
              </SocialLink>
              <SocialLink href="https://tumblr.com/widgets/share/tool/preview?canonicalUrl=https%3A%2F%2Fonruntime.com%2Fprojects%2Finstagram-dark&title=&caption=">
                <Tumblr>
                  <SocialIcon className={"ri-tumblr-fill"} />
                  <SocialTitle>{"Tumblr"}</SocialTitle>
                </Tumblr>
              </SocialLink>
              <SocialLink href="mailto:?body=https://onruntime.com/projects/instagram-dark">
                <Email>
                  <SocialIcon className={"ri-mail-fill"} />
                  <SocialTitle>{"Email"}</SocialTitle>
                </Email>
              </SocialLink>
            </SocialList>
          </ListWrapper>
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
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 1.25;
`;

const Header = styled.header``;

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

const Patreon = styled(Button)`
  padding: 1rem 2rem;
  width: 100%;
  background-color: #ff424d;
  color: ${({ theme }) => theme.colors.text.lightest};
  margin-right: 10px;
`;

const Facebook = styled(Button)`
  padding: 1rem 2rem;
  width: 100%;
  background-color: #4267b2;
  color: ${({ theme }) => theme.colors.text.lightest};
  margin-right: 10px;
`;

const Email = styled(Button)`
  padding: 1rem 2rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.layout.dark};
  color: ${({ theme }) => theme.colors.text.lightest};
  margin-right: 10px;
`;

const Tumblr = styled(Button)`
  padding: 1rem 2rem;
  width: 100%;
  background-color: #011935;
  color: ${({ theme }) => theme.colors.text.lightest};
  margin-right: 10px;
`;

export default Welcome;
