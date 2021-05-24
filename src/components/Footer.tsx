import React from "react";
import styled from "styled-components";
import Link from "./Link";

const Footer: React.FC = () => (
    <Container>
        <Content>
            <Col>
                <ColTitle>Jeu Responsable</ColTitle>
                <ColDescription>
                    <p>La plupart des gens jouent pour le plaisir et l&apos;amusement. Cependant, certaines personnes considèrent le jeu comme un moyen de gagner de l&apos;argent, de dépenser plus qu&apos;elles ne peuvent se permettre ou d&apos;utiliser le jeu pour se distraire des problèmes quotidiens. Les conseils suivants peuvent vous aider à jouer en toute sécurité.</p>
                    <ol >
                        <li>Ne pensez pas que le jeu est un moyen de gagner de l&apos;argent.</li>
                        <li>Ne jouez qu&apos;avec de l&apos;argent que vous pouvez vous permettre de perdre.</li>
                        <li>Fixez une limite d&apos;argent à l&apos;avance</li>
                        <li>Fixez une limite de temps à l&apos;avance</li>
                        <li>Ne jamais courir après ses pertes</li>
                    </ol>
                    <p>Pour trouver d&apos;autres conseils, de l&apos;aide et du soutien, consultez le site <Link href="https://begambleaware.org/">https://begambleaware.org/</Link></p>
                </ColDescription>
            </Col>
            <Col>
                <ColTitle>Préventions</ColTitle>
                <ColDescription>
                    ShadowBonus n’est en aucun cas responsable des informations incorrectes sur les sites, les bonus, les pertes, les promotions ou les offres.
                </ColDescription>
                <ColTitle>Attention</ColTitle>
                <ColDescription>
                    Les offres sur notre site sont susceptibles d&apos;évoluer ou d&apos;être annulées. Nous recommandons toujours au joueur d&apos;examiner les conditions et de vérifier le bonus directement sur le site du casino/des sociétés de paris.
                </ColDescription>
            </Col>
        </Content>
        <SubFooterContainer>
            <SubFooter>
                <SubFooterCol>
                    <Copyright>© ShadowBonus - Tous droit réservés <Made><span>/</span> Fait par <a href="https://onruntime.com">onRuntime</a></Made></Copyright>
                </SubFooterCol>
                <SubFooterCol>
                    <Info>
                        <InfoTitle>Plus d&apos;informations:</InfoTitle>
                        <FooterIconContainer href="https://twitter.com/vitaisback">
                            <FooterIcon className="ri-twitter-fill" />
                        </FooterIconContainer>
                        <FooterIconContainer href="https://twitch.tv/vitapvpey">
                            <FooterIcon className="ri-twitch-fill" />
                        </FooterIconContainer>
                        <FooterIconContainer href="https://discord.gg/JSjHKg728g">
                            <FooterIcon className="ri-discord-fill" />
                        </FooterIconContainer>
                    </Info>
                </SubFooterCol>
            </SubFooter>
        </SubFooterContainer>
    </Container>
);

const Container = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: rgb(23, 23, 23);
    user-select: none;
`;

const Content = styled.div`
    display: flex;
    max-width: 1224px;
    width: calc(100% - 15px * 2);
    padding: 0 15px;
    margin: 30px auto;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Col = styled.div`
    flex: 1;
    padding: 0 15px;

    :first-child {
        padding-left: 0;
    }

    :last-child {
        padding-right: 0;
    }

    @media (max-width: 768px) {
        padding: 0;
        margin-top: 30px;

        :first-child {
            margin-top: 0;
        }
    }
`;

const ColTitle = styled.h3`
    font-weight: 700;
    text-transform: uppercase;
    color: rgb(72, 255, 123);

    margin-top: 30px;

    :first-child {
        margin-top: 0;
    }
`;

const ColDescription = styled.div`
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.5;

    ol {
        margin: 10px 0 10px 30px;
        list-style: decimal;
    }
`;

const SubFooterContainer = styled.div`
    display: flex;
`;

const SubFooter = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    padding: 0 15px;
    width: calc(100% - 15px * 2);
    max-width: 1524px;
    border-top: 2px solid rgba(255, 255, 255, .5);
    padding: 30px 0;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

const SubFooterCol = styled.div``;

const Copyright = styled.p`
    font-weight: 500;
`;

const Made = styled.span`
    margin-top: 5px;
    color: rgb(150,150,150);

    a {
        color: rgb(150,150,150);
    }

    @media (max-width: 768px) {
        span {
            display: none;
        }
    }
`;

const Info = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        margin-top: 15px;
    }
`;

const InfoTitle = styled.p`
    @media (max-width: 768px) {
        display: none;
    }
`;

const FooterIconContainer = styled(Link)`
    height: 40px;
    width: 40px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(36, 36, 36, .5);
    margin-left: 15px;
    transition: all .2s;

    :hover {
        background-color: rgba(36, 36, 36, 1);
    }

    @media (max-width: 768px) {
        margin: 0 10px;
    }
`;

const FooterIcon = styled.i``;

export default Footer;