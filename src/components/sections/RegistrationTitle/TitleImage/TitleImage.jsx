import React from "react";

export default function TitleImage ({classNames, classNamesJoin, img, imgAlt}) {
    return (
            <img
                className={classNamesJoin(classNames)}
                src={img}
                alt={imgAlt}
            />
    )
}