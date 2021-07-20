import React from "react";

export default function Input ({classNames, classNamesJoin, name, type, placeholder}) {
    return (
        <div>
            <input
                className={classNamesJoin(classNames)}
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}