import MinimalLayout from '../layouts/minimalLayout';
import WelcomePage from '../pages/welcome';
import Layout from '../layouts';


const PagesRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '',
      element: <WelcomePage />
    },
    {
      path: 'dashboard',
      element: <Layout />
    },
  ]
};

export default PagesRoutes;
