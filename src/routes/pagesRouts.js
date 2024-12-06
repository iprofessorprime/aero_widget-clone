import MinimalLayout from '../layouts/minimalLayout';
import WelcomePage from '../pages/welcome';
import Layout from '../layouts';
import Portfolio from '../pages/portfolio';
import IframePage from '../pages/iFrame';

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
    {
      path: 'iframe',
      element: <IframePage />
    },
  ]
};

export default PagesRoutes;
