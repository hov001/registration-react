import React from "react";
import TitleImage from "./TitleImage/TitleImage";
import TitleDescription from "./TitleDescription/TitleDescription";
import titleContent from "../../../data/titleContent.data";

const {titleImg, titleImgAlt, description} = titleContent

export default function RegistrationTitleSection ({classNamesJoin}) {
    return (
        <div>
            <TitleImage
                classNames={[
                    'mx-auto',
                    'h-12',
                    'w-auto'
                ]}
                classNamesJoin={classNamesJoin}
                img={titleImg}
                imgAlt={titleImgAlt}
            />
            <TitleDescription
                classNames={[
                    'mt-6',
                    'text-center',
                    'text-3xl',
                    'font-extrabold',
                    'text-gray-900'
                ]}
                classNamesJoin={classNamesJoin}
                description={description}
            />
        </div>
    )
}