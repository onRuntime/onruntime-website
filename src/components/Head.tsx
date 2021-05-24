import React from "react";
import { Helmet } from "react-helmet";
import { APPNAME } from "../constants/main";

interface TitleProps {
    title: string;
    subtitle?: string
    description?: string
}

const Head: React.FC<TitleProps> = ({ title, subtitle, description }: TitleProps) => (
    <Helmet>
        {title && <title>{`${subtitle ? `${subtitle} - ` : ""}${title} | ${APPNAME}`}</title>}
        {description && <meta name="description" content={description} />}
    </Helmet>
);

export default Head;