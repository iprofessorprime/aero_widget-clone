import Dashboard from '../pages/dashboard';
import Layout from '../layouts';
import AllCards from '../pages/cards';
import AllLoaders from '../pages/loaders';
import ColorsPage from '../pages/colorsShades';
import Calendars from '../pages/calenders';
import Games from '../pages/games';
import TypingGame from '../pages/games/typingGame';
import GamesList from '../pages/games/gameList';
import CarRacingGame from '../pages/games/carRacing';

const DashboardRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '',
      element: <Dashboard />
    },
    {
      path: 'dashboard',
      element: <Dashboard />
    },
    {
      path: 'cards',
      element: <AllCards />
    },
    {
      path: 'loaders',
      element: <AllLoaders />
    },
    {
      path: 'colorsShades',
      element: <ColorsPage />
    },
    {
      path: 'calendars',
      element: <Calendars />
    },
    {
      path: 'games',
      element: <Games />,
      children: [
        {
          path: '',
          element: <GamesList />
        },
        {
          path: 'typing-game',
          element: <TypingGame />
        },
        {
          path: 'car-racing',
          element: <CarRacingGame />
        },
      ]
    },
  ]
};

export default DashboardRoutes;
