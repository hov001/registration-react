import React from "react";
import RegistrationTitleSection from "../sections/RegistrationTitle/RegistrationTitle.section";
import RegistrationFormSection from "../sections/RegistrationForm/RegistrationForm.section";

export default function Registration () {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <RegistrationTitleSection />
                <RegistrationFormSection />
            </div>
        </div>
    )
}