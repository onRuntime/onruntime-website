import styled from "styled-components";

import { Member } from "../../../types/members";
import MemberCard from "../Card";

interface MemberListProps {
  data: Member[];
}

const MemberList: React.FC<MemberListProps> = ({ data }: MemberListProps) => {
  return (
    <Container>
      {data.map((member: Member, key: number) => (
        <MemberCard key={key} data={member} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: -10px;
  margin-left: -10px;
`;

export default MemberList;
