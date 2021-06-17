import React from "react";
import styled from "styled-components";
import moment from "moment";

import { Member } from "../../../types/members";
import Link from "../../Link";
import useTranslation from "@hooks/useTranslation";

interface MemberCardProps {
  data: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({
  data: { firstname, lastname, job, thumbnail_url, external_url, joined_at },
}: MemberCardProps) => {
  const { t } = useTranslation();

  const [state, setState] = React.useState<{
    height: number;
    isContentOpen: boolean;
  }>({
    height: 0,
    isContentOpen: false,
  });
  const containerRef = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    setState({ ...state, height: containerRef.current.clientWidth });
  }, [state, setState]);

  const handleContentOpen = () => {
    setState({ ...state, isContentOpen: state.isContentOpen ? false : true });
  };

  return (
    <Container
      ref={containerRef}
      height={state.height}
      onMouseEnter={handleContentOpen}
      onMouseLeave={handleContentOpen}
    >
      <ThumbnailImage
        src={thumbnail_url}
        width={500}
        height={500}
        draggable={false}
      />
      <Content href={external_url} isOpen={state.isContentOpen}>
        <Name>{`${firstname} ${lastname}`}</Name>
        <Job>{job}</Job>
        <Joined>{`${t("about.team.since")} ${moment(
          new Date(joined_at)
        ).fromNow()}`}</Joined>
      </Content>
    </Container>
  );
};

const Container = styled.div<{ height: number }>`
  position: relative;
  width: calc(16.6% - 10px);
  height: ${({ height }) => height}px;
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.lightest};
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: calc(33.3% - 10px);
  }
`;

const ThumbnailImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Content = styled(Link)<{ isOpen?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  opacity: 0;
  animation-duration: 1s;
  animation-name: ${({ isOpen }) =>
    isOpen === false ? "fadeOut" : isOpen === true ? "fadeIn" : ""};
  animation-fill-mode: both;
  overflow-y: auto;
`;

const Name = styled.h3`
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const Job = styled.h4`
  font-size: ${({ theme }) => theme.size.small};
`;

const Joined = styled.p`
  margin-top: 5px;
  font-size: ${({ theme }) => theme.size.tiny};
  color: ${({ theme }) => theme.colors.text.light};
`;

export default MemberCard;
