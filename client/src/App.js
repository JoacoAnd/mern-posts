import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home, Form, NotFound } from './pages';

const App = () => {
  return (
    <div className='bg-neutral-900'>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<Form />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </div>
  )
}

export default App