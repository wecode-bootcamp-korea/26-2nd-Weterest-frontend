import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EntryPage from './pages/Login/EntryPage';
import User from './User';

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/*" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
