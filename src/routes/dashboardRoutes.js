import Dashboard from '../pages/dashboard';
import Layout from '../layouts';
import AllCards from '../pages/cards';
import AllLoaders from '../pages/loaders';
import ColorsPage from '../pages/colorsShades';
import Calendars from '../pages/calenders';

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
  ]
};

export default DashboardRoutes;
