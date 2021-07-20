import React from 'react'
import './App.css'
import Registration from "./pages/Registration/Registration";
// helper
import classNamesJoin from "./helpers/classNamesJoin.helper";


function App() {
  return <Registration
      classNames={[
          'min-h-screen',
          'flex items-center',
          'justify-center',
          'bg-gray-50',
          'py-12',
          'px-4',
          'sm:px-6',
          'lg:px-8'
      ]}

      classNamesJoin={classNamesJoin}
  />
}

export default App
