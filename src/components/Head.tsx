import React from "react";
import { Helmet } from "react-helmet";
import { APPNAME } from "../constants/main";

interface TitleProps {
    title: string;
    subtitle?: string
}

const Head: React.FC<TitleProps> = ({ title, subtitle }: TitleProps) => (
    <Helmet>
        {title && <title>{`${subtitle ? `${subtitle} - ` : ""}${title} | ${APPNAME}`}</title>}
    </Helmet>
);

export default Head;