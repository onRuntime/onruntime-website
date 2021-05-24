import { useTranslation } from "react-i18next";

import Head from "components/Head";

const Projects: React.FC = () => {
    const [t] = useTranslation();

    return (
        <>
            <Head
                title={t("projects.head.title")}
                description={t("projects.head.desc")}
            />
        </>
    );
};

export default Projects;