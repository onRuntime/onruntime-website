import { useTranslation } from "react-i18next";

import Head from "components/Head";

const Home: React.FC = () => {
    const [t] = useTranslation();

    return (
        <>
            <Head
                title={t("home.head.title")}
                description={t("main.desc")}
            />
        </>
    );
};

export default Home;