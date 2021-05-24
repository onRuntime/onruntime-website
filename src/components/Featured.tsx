import styled from "styled-components";
import FeaturedCard from "./FeaturedCard";
import featuredData from "data/partners.json";
import PartnerProps from "types/partner";

const Featured: React.FC = () => (
    <Container>
        {featuredData.slice(0, 3).map((partner: PartnerProps, key: number) =>
            <FeaturedCard key={key} partner={partner} large={(key == 0)} />
        )}
    </Container>
);

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-left: -50px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export default Featured;