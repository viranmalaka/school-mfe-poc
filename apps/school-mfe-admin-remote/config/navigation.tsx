import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PasswordIcon from '@mui/icons-material/Password';

const NavConfig = {
  menu: [
    {
      key: 'admin',
      label: 'Admin',
      icon: <AdminPanelSettingsIcon />,
      children: [
        {
          key: 'admin/update-passwords',
          label: 'Admin - Update Passwords',
          icon: <PasswordIcon />,
        },
      ],
    },
  ],
};

export default NavConfig;
