import styled from "styled-components";

import Link from "../../Link";
import { Project } from "../../../types/project";
import React from "react";
import useTranslation from "@hooks/useTranslation";

interface ProjectCardProps {
  data: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  data: { title, desc, link, thumbnail_url, tags, featured },
}: ProjectCardProps) => {
  const { t } = useTranslation();
  return (
    <Container href={link}>
      <Frame>
        <FrameImage
          src={thumbnail_url}
          alt={title}
          width={1920}
          height={1080}
        />
      </Frame>
      <Content>
        <Tag>
          {featured && (
            <TagItem>
              <i className={"ri-star-fill"} /> {t("projects.featured")}
            </TagItem>
          )}
          {tags.map((tag: string, key: number) => (
            <TagItem key={key}>{tag}</TagItem>
          ))}
        </Tag>
        <Title>{title}</Title>
        <Description>{t(desc)}</Description>
      </Content>
    </Container>
  );
};

const Container = styled(Link)`
  position: relative;
  width: calc(33.3% - 10px);
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.lightest};
  display: flex;
  flex-direction: column;

  :hover {
    //box shadow
    box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: calc(100% - 10px);
  }
`;

const Frame = styled.div`
  display: flex;
  height: 200px;
  overflow: hidden;
`;

const FrameImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 24px;
  text-align: left;
`;

const Tag = styled.ul`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin-left: -2px;
`;

const TagItem = styled.li`
  margin: 2px;
  border-radius: 9999px;
  font-size: ${({ theme }) => theme.size.small};
  padding: 2px 12px;
  background-color: rgba(255, 255, 255, 0.2);

  i {
    // align middle
    vertical-align: middle;
  }

  :last-child {
    margin-right: 0;
  }
`;

const Title = styled.h3`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.size.normal};
  font-weight: ${({ theme }) => theme.weight.regular};
  opacity: 0.75;
`;

export default ProjectCard;
