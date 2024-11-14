import { useRoutes } from 'react-router-dom';
import DashboardRoutes from './dashboardRoutes';
import PagesRoutes from './pagesRouts';

export default function AppRouter() {
  return useRoutes([DashboardRoutes]);
}
