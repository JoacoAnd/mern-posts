import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home, Form, NotFound } from './pages';
import { PostContainer } from './context/postContext';

const App = () => {
  return (
    <PostContainer>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<Form />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </PostContainer>
  )
}

export default App