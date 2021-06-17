import styled from "styled-components";

import { Project } from "../../../types/project";
import ProjectCard from "../Card";

interface ProjectListProps {
  data: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({
  data,
}: ProjectListProps) => {
  return (
    <Container>
      {data.map((project: Project, key: number) => (
        <ProjectCard key={key} data={project} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-left: -10px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: column;
    align-items: center;
    justify-content: initial;
  }
`;

export default ProjectList;
