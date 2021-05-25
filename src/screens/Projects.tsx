import { useTranslation } from "react-i18next";
import styled from "styled-components";

import Head from "components/Head";
import MainContainer from "components/Layout/MainContainer";
import ProjectList from "components/ProjectList";

import projectsData from "data/projects";

const Projects: React.FC = () => {
    const [t] = useTranslation();

    return (
        <MainContainer>
            <Head
                title={t("projects.head.title")}
                description={t("projects.head.desc")}
            />
            <Container>
                <Title>{t("projects.title")}</Title>
                <Description>{t("projects.desc")}</Description>
                <ProjectList data={projectsData} />
            </Container>
        </MainContainer>
    );
};

const Container = styled.div`
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

export default Projects;