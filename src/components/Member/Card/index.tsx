import Link from "@components/Link";
import useTranslation from "@hooks/useTranslation";
import moment from "moment";
import React from "react";
import styled from "styled-components";

import { Member } from "../../../types/members";
import "moment/locale/fr";

interface MemberCardProps {
  data: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({
  data: {
    firstname,
    lastname,
    job,
    states,
    thumbnail_url,
    external_url,
    joined_at,
  },
}: MemberCardProps) => {
  const { t, locale } = useTranslation();

  const [height, setHeight] = React.useState<number>(0);
  const [contentOpen, setContentOpen] = React.useState<boolean | null>(null);

  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (containerRef.current) setHeight(containerRef.current.clientWidth);
    window.addEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    if (containerRef.current) setHeight(containerRef.current.clientWidth);
  };

  const handleContentOpen = React.useCallback(
    () => setContentOpen(!contentOpen),
    [contentOpen],
  );

  return (
    <Container
      ref={containerRef}
      height={height}
      onMouseEnter={handleContentOpen}
      onMouseLeave={handleContentOpen}
    >
      <ThumbnailImage
        src={thumbnail_url}
        width={500}
        height={500}
        draggable={false}
      />
      <Content href={external_url} contentOpen={contentOpen}>
        <Name>{`${firstname} ${lastname}`}</Name>
        <Job>
          {t(states)}
          {" / "}
          {t(job)}
        </Job>
        <Joined>{`${t("about.team.since")} ${moment(new Date(joined_at))
          .locale(locale || "en")
          .fromNow()}`}</Joined>
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

const Content = styled(Link)<{ contentOpen?: boolean | null }>`
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
  transition: opacity 0.5s;
  opacity: ${({ contentOpen }) => (contentOpen ? 1 : 0)};
  overflow-y: auto;
`;

const Name = styled.h3`
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const Job = styled.h4`
  font-size: ${({ theme }) => theme.size.small};
  white-space: auto;
`;

const Joined = styled.p`
  margin-top: 5px;
  font-size: ${({ theme }) => theme.size.tiny};
  color: ${({ theme }) => theme.colors.text.light};
`;

export default MemberCard;
