import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import CreateIcon from '@mui/icons-material/Create';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const NavConfig = {
  menu: [
    {
      key: 'students',
      label: 'Students',
      icon: <ChildCareIcon />,
      children: [
        {
          key: 'student/all',
          label: 'Student - All',
          icon: <FormatListBulletedIcon />,
        },
        {
          key: 'student/add-new',
          label: 'Student - Add New',
          icon: <PersonAddAltIcon />,
        },
        {
          key: 'student/edit',
          label: 'Student - Edit',
          icon: <CreateIcon />,
        },
      ],
    },
    {
      key: 'student/inquiry',
      label: 'Students Inquiry',
      icon: <AccountBalanceWalletIcon />,
    },
  ],
};

export default NavConfig;
