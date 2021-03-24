import React, { LegacyRef, ReactEventHandler } from "react";
import imageStyles from '@styles/modules/Image.module.scss';
import useImageLoaded from "@hooks/useImageLoaded";

interface Props {
    src: string;
    alt: string;
    className?: string;
};

const Image = ({ src, alt, className }: Props) => {
    const [ref, loaded, onLoad] = useImageLoaded();

    return (
        <>
            <img
                ref={ref as LegacyRef<HTMLImageElement>}
                style={{ opacity: loaded ? 1 : 0 }}
                onLoad={onLoad as ReactEventHandler<HTMLImageElement>}
                className={[className, imageStyles.img, loaded ? imageStyles.loaded : null].join(' ')}
                src={src}
                alt={alt}
                loading="lazy"
            />
            {!loaded && <div className={[className, imageStyles.loader].join(' ')}></div>}
        </>
    );
};

export default Image;