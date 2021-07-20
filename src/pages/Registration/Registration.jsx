import React from "react";
import RegistrationTitleSection from "../../components/sections/RegistrationTitle/RegistrationTitle.section";
import RegistrationFormSection from "../../components/sections/RegistrationForm/RegistrationForm.section";
import WrapperSection from "../../components/WrapperSection/WrapperSection";

export default function Registration ({classNames, classNamesJoin}) {
    return (
        <div className={classNamesJoin(classNames)}>
            <WrapperSection
                classNames={[
                    'max-w-md',
                    'w-full',
                    'space-y-8'
                ]}
                classNamesJoin={classNamesJoin}

            >
                <RegistrationTitleSection classNamesJoin={classNamesJoin} />
                <RegistrationFormSection classNamesJoin={classNamesJoin} />
            </WrapperSection>
        </div>
    )
}