import React from "react";
import {LockClosedIcon} from "@heroicons/react/solid";
import Input from "../../Input/Input";
import WrapperSection from "../../WrapperSection/WrapperSection";

class RegistrationFormSection extends React.Component {
    constructor(props) {
        super(props);
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        const {classNamesJoin, classNames} = this.props

        return (
            <form className={classNamesJoin(classNames)} onSubmit={this.handleOnSubmit}>
                <Input
                    classNames={[]}
                    classNamesJoin={classNamesJoin}
                    name={'remember'}
                    type={'hidden'}
                    defaultValue={'true'}
                />
                <WrapperSection
                    classNames={[
                        'rounded-md',
                        'shadow-sm',
                        '-space-y-px'
                    ]}
                    classNamesJoin={classNamesJoin}
                >
                    <Input
                        classNames={[
                            'appearance-none',
                            'rounded-none',
                            'relative',
                            'block',
                            'w-full',
                            'px-3',
                            'py-2',
                            'border',
                            'border-gray-300',
                            'placeholder-gray-500',
                            'text-gray-900',
                            'rounded-t-md',
                            'focus:outline-none',
                            'focus:ring-indigo-500',
                            'focus:border-indigo-500',
                            'focus:z-10',
                            'sm:text-sm'
                        ]}
                        classNamesJoin={classNamesJoin}
                        name={'firstName'}
                        type={'text'}
                        placeholder={'First name'}
                    />
                    <Input
                        classNames={[
                            'appearance-none',
                            'rounded-none',
                            'relative',
                            'block',
                            'w-full',
                            'px-3',
                            'py-2',
                            'border',
                            'border-gray-300',
                            'placeholder-gray-500',
                            'text-gray-900',
                            'focus:outline-none',
                            'focus:ring-indigo-500',
                            'focus:border-indigo-500',
                            'focus:z-10',
                            'sm:text-sm'
                        ]}
                        classNamesJoin={classNamesJoin}
                        name={'lastName'}
                        type={'text'}
                        placeholder={'Last name'}
                    />
                    <Input
                        classNames={[
                            'appearance-none',
                            'rounded-none',
                            'relative',
                            'block',
                            'w-full',
                            'px-3',
                            'py-2',
                            'border',
                            'border-gray-300',
                            'placeholder-gray-500',
                            'text-gray-900',
                            'focus:outline-none',
                            'focus:ring-indigo-500',
                            'focus:border-indigo-500',
                            'focus:z-10',
                            'sm:text-sm'
                        ]}
                        classNamesJoin={classNamesJoin}
                        name={'email'}
                        type={'email'}
                        placeholder={'Email address'}
                    />
                    <Input
                        classNames={[
                            'appearance-none',
                            'rounded-none',
                            'relative',
                            'block',
                            'w-full',
                            'px-3',
                            'py-2',
                            'border',
                            'border-gray-300',
                            'placeholder-gray-500',
                            'text-gray-900',
                            'focus:outline-none',
                            'focus:ring-indigo-500',
                            'focus:border-indigo-500',
                            'focus:z-10',
                            'sm:text-sm'
                        ]}
                        classNamesJoin={classNamesJoin}
                        name={'password'}
                        type={'password'}
                        placeholder={'Password'}
                    />
                    <Input
                        classNames={[
                            'appearance-none',
                            'rounded-none',
                            'relative',
                            'block',
                            'w-full',
                            'px-3',
                            'py-2',
                            'border',
                            'border-gray-300',
                            'placeholder-gray-500',
                            'text-gray-900',
                            'rounded-b-md',
                            'focus:outline-none',
                            'focus:ring-indigo-500',
                            'focus:border-indigo-500',
                            'focus:z-10',
                            'sm:text-sm'
                        ]}
                        classNamesJoin={classNamesJoin}
                        name={'password'}
                        type={'password'}
                        placeholder={'Confirm password'}
                    />
                </WrapperSection>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                        <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                      </span>
                        Sign up
                    </button>
                </div>
            </form>
        )
    }
}

export default RegistrationFormSection