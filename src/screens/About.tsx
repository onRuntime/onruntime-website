import { useTranslation } from "react-i18next";

import Head from "components/Head";

const Projects: React.FC = () => {
    const [t] = useTranslation();

    return (
        <>
            <Head
                title={t("about.head.title")}
                description={t("about.head.desc")}
            />
        </>
    );
};

export default Projects;