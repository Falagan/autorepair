import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './modules/dashboard/Dashboard';
import React from 'react';
import { Home } from './modules/home/Home';
import { Layout } from './layout/Layout';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="private" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
