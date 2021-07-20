import React from "react";

export default function WrapperSection({classNames, classNamesJoin, children}) {
    return (
        <div className={classNamesJoin(classNames)}>
            {children}
        </div>
    )
}