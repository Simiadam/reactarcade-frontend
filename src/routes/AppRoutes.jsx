import 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import Home from '../pages/Home';
import Games from '../pages/Games';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/games"
          element={
            <MainLayout>
              <Games />
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
