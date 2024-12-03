import MinimalLayout from '../layouts/minimalLayout';
import WelcomePage from '../pages/welcome';
import Layout from '../layouts';
import Portfolio from '../pages/portfolio';

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
    {
      path: 'portfolio',
      element: <Portfolio />
    },
  ]
};

export default PagesRoutes;
