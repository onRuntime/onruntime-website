import { useTranslation } from "react-i18next";
import styled from "styled-components";

import Link from "../components/Link";
import * as ROUTES from "constants/routes";
import Head from "components/Head";
import { APPNAME } from "constants/main";

const Error: React.FC = () => {
    const [t] = useTranslation();
    return (
        <Container>
            <Head title={t("error.head.title")} />
            <Title>{t("error.title")}</Title>
            <Description>{t("error.desc")} <Link href={ROUTES.HOME}>{APPNAME}</Link>.</Description>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
`;

const Title = styled.h2`
    font-weight: 600;
    font-size: 24px;
`;

const Description = styled.h2`
    margin-top: 30px;

    a {
        color: ${({ theme }) => theme.colors.text.lightest};;
        font-weight: ${({ theme }) => theme.weight.bold};;
    }
`;

export default Error;