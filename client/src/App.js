import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home, PostForm, NotFound } from './pages';
import { PostProvider } from './context/postContext';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <PostProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new' element={<PostForm />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Toaster />
    </PostProvider>
  )
}

export default App