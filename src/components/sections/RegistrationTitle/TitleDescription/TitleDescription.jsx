import React from "react";

export default function TitleDescription ({ classNames, classNamesJoin, description }) {
    return (
        <h2 className={classNamesJoin(classNames)}>{ description }</h2>
    )
}