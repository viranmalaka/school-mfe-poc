import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { useRouter } from 'next/router';
import { useState } from 'react';
import { getFullMenu } from '../config/menu-configs';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';

const AppMenu = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const router = useRouter();

  const handleClick = (navigate: boolean, key: string, value: boolean) => {
    if (navigate) {
      return router.push(`/d/${key}`);
    }
    setOpen({ ...open, [key]: value });
  };

  const menu = getFullMenu();

  return (
    <List
      sx={{ width: '100%', maxWidth: 250, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          This is dynamic menu
        </ListSubheader>
      }
    >
      {menu.map((item: any) => (
        <>
          <ListItemButton
            key={item.key}
            onClick={() =>
              handleClick(!item.children, item.key, !open[item.key])
            }
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
            {item.children && (
              <>{open[item.key] ? <ExpandLess /> : <ExpandMore />}</>
            )}
          </ListItemButton>

          {item.children && (
            <Collapse in={open[item.key]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.children.map((child: any) => (
                  <ListItemButton
                    sx={{ pl: 4 }}
                    key={child.key}
                    onClick={() =>
                      handleClick(true, child.key, !open[child.key])
                    }
                  >
                    <ListItemIcon>{child.icon}</ListItemIcon>
                    <ListItemText primary={child.label} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          )}
        </>
      ))}
    </List>
  );
};

export default AppMenu;
