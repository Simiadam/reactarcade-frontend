import 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import GameLayout from '../components/layouts/GameLayout';
import Home from '../pages/Home';
import Games from '../pages/Games';
import TrashGamePage from '../pages/TrashGamePage';
import MemoryGamePage from '../pages/MemoryGamePage';

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
          path="/games/trashgamepage"
          element={
            <GameLayout>
              <TrashGamePage />
            </GameLayout>
          }
        />
        <Route
          path="/games/memorygamepage"
          element={
            <GameLayout>
              <MemoryGamePage />
            </GameLayout>
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
