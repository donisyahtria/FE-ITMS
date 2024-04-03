import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
// import DaftarEvent from 'views/pages/Talent Identification/DaftarEvent';
import RumpunJabatanChart from 'ui-component/charts/RumpunJabatanChart00';
import SecondLayout from 'layout/SecondLayout';
// import DaftarEvent from 'views/pages/Talent Identification/DaftarEvent';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/pages/dashboard/dashboard')));
const DaftarEvent = Loadable(lazy(() => import('views/pages/Talent Identification/DaftarEvent')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <SecondLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    // {
    //   path: 'dashboard',
    //   element: <DashboardDefault/>
    // },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        },
      ]
    },
    // {
    //   path: 'talent-identification',
    //   children: [
    //     {
    //       path: '/talent/event',
    //       element: <DaftarEvent/>
    //     }
    //   ]
    // },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
