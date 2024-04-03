// assets
import { IconDashboard } from '@tabler/icons-react';
import PersonSearchRoundedIcon from '@mui/icons-material/PersonSearchRounded';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU TATENT IDENTIFICATION ||============================== //

const TalentIdentification = {

  id: 'talent',
  // title: 'Pages',
  // caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'talent',
      title: 'Talent Identification',
      type: 'collapse',
      icon: icons.IconDashboard,

      children: [
        {
          // id: 'login3',
          title: 'Event',
          type: 'item',
          url: '/talent/event',
          target: false
        },
        // {
        //   // id: 'register3',
        //   title: 'Parameter Event',
        //   type: 'item',
        //   url: '/talent/event',
        //   target: false
        // },
      ]
    }
  ]
};

export default TalentIdentification;
