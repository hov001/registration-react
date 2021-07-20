import React from "react";
import WrapperSection from "../../components/WrapperSection/WrapperSection";
import RegistrationTitleSection from "../../components/sections/RegistrationTitle/RegistrationTitle.section";
import RegistrationFormSection from "../../components/sections/RegistrationForm/RegistrationForm.section";

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
                <RegistrationTitleSection
                    classNamesJoin={classNamesJoin}
                />
                <RegistrationFormSection
                    classNames={[
                        'mt-8',
                        'space-y-6'
                    ]}
                    classNamesJoin={classNamesJoin}
                />
            </WrapperSection>
        </div>
    )
}