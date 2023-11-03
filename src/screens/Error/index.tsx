import Head from "@components/Head";
import MainContainer from "@components/Layout/MainContainer";
import Link from "@components/Link";
import { APP_NAME } from "@constants/main";
import ROUTES from "@constants/routes";
import useTranslation from "@hooks/useTranslation";
import styled from "styled-components";

const Error: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Head title={t("error.head.title")} />
      <Title>{t("error.title")}</Title>
      <Description>
        {t("error.desc")} <Link href={ROUTES.HOME}>{APP_NAME}</Link>
        {"."}
      </Description>
    </Container>
  );
};

const Container = styled(MainContainer)`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 60px - 200px);
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
`;

const Description = styled.h2`
  margin-top: 30px;

  a {
    color: ${({ theme }) => theme.colors.text.lightest};
    font-weight: ${({ theme }) => theme.weight.bold};
  }
`;

export default Error;
