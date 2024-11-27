import { useRoutes } from 'react-router-dom';
import DashboardRoutes from './dashboardRoutes';
import PagesRoutes from './pagesRouts';
import Page404 from '../pages/404';
import PageNotFound from '../pages/404/pageNotFound';

export default function AppRouter() {
  return useRoutes([DashboardRoutes,
    PagesRoutes,
    {
      path: '*',
      element: <PageNotFound />,
    },
  ]);
}
