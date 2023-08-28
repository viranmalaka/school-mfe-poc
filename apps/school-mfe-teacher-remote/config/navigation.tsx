import CreateIcon from '@mui/icons-material/Create';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
const NavConfig = {
  menu: [
    {
      key: 'teacher',
      label: 'Teachers',
      icon: <InsertEmoticonIcon />,
      children: [
        {
          key: 'teacher/all',
          label: 'Teacher - All',
          icon: <FormatListBulletedIcon />,
        },
        {
          key: 'teacher/add-new',
          label: 'Teacher - Add New',
          icon: <PersonAddAltIcon />,
        },
        {
          key: 'teacher/edit',
          label: 'Teacher - Edit',
          icon: <CreateIcon />,
        },
      ],
    },
  ],
};

export default NavConfig;
