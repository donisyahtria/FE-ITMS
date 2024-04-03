import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import MainLayout from 'layout/MainLayout';
// import DaftarEvent from 'views/pages/Talent Identification/DaftarEvent';
// import DaftarEvent from 'views/pages/Talent Identification/DaftarEvent';

// login option 3 routing
const DaftarEvent = Loadable(lazy(() => import('views/pages/Talent Identification/DaftarEvent')));
// const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const TalentRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/talent/event',
      element: <DaftarEvent />
    }
  ]
};

export default TalentRoutes;
