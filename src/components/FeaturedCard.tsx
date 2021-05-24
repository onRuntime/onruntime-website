import styled from "styled-components";
import PartnerProps from "types/partner";
import Button from "./Layout/Button";
import Link from "./Link";

type FeaturedCardProps = {
    partner: PartnerProps;
    large: boolean;
};

const FeaturedCard: React.FC<FeaturedCardProps> = ({ partner, large }: FeaturedCardProps) => {
    const { title,
        description,
        logo,
        link,
        note,
        color,
        wallpaper,
        percentage,
        maximum,
        spinsAmount,
        wager,
        promo,
        promoCode,
        tag
    } = partner;

    return (
        <Container large={large} color={color} wallpaper={wallpaper}>
            <Tag>{tag}</Tag>
            <Footer>
                <FeaturedButton as={Link} href={link}>Réclamer le bonus</FeaturedButton>
                <InfoIcon className="ri-information-fill" />
            </Footer>
        </Container>
    );
};

const Container = styled.div<{ large: boolean; wallpaper: string }>`
    position: relative;
    width: ${({ large }) => large ? "calc(60% - 50px - 30px * 2)" : "calc(50% - 50px - 30px * 2)"};
    height: calc(300px - 30px * 2);
    margin-left: 50px;
    margin-top: 30px;
    border-radius: 15px;
    overflow: hidden;
    background: url(${({ wallpaper }) => (wallpaper ? wallpaper : "https://picsum.photos/1920/1080")});
    background-color: ${({ color }) => (color ? color : "rgb(23, 23, 23)")};
    background-repeat: no-repeat;
    background-size: cover;
    cursor: pointer;
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 30px;

    @media (max-width: 768px) {
        width: calc(100% - 50px - 30px * 2);
    }
`;

const Tag = styled.p`
    text-transform: uppercase;
`;

const Footer = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
`;

const FeaturedButton = styled(Button)`
    white-space: nowrap;
    color: rgb(0, 0, 0);

    :hover {
        color: rgb(0, 0, 0);
        filter: brightness(1);
        background-color: rgb(72, 255, 123);
    }

    i {
        margin-right: 5px;
        @media (max-width: 768px) {
            margin-right: 0;
        }
    }

    span {
        @media (max-width: 768px) {
            display: none;
        }
    }

    @media (max-width: 768px) {
        padding: 8px 8px;
    }

    @media (max-width: 1224px) {
        white-space: normal;
    }
`;

const InfoIcon = styled.i`
    margin-top: auto;
    font-size: 30px;
`;

export default FeaturedCard;