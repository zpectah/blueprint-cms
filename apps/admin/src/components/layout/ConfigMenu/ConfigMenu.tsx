import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Menu, MenuItem, ListItemText, ListItemIcon, Divider } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import Check from '@mui/icons-material/Check';
import { useAppContext } from '../../../contexts';
import { themeModeKeys } from '../../../enums';
import { ThemeMode } from '../../../types';

const ConfigMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { i18n } = useTranslation();
  const { mode, setMode } = useAppContext();

  const open = Boolean(anchorEl);
  const idPrefix = 'header-config';

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeHandler = () => {
    setAnchorEl(null);
  };
  const switchLanguageHandler = (lng: string) => {
    i18n.changeLanguage(lng).then(() => {
      closeHandler();
    });
  };
  const switchThemeModeHandler = (mode: ThemeMode) => {
    setMode(mode);
    closeHandler();
  };

  const languageMenuItems = useMemo(() => {
    return [
      {
        key: 1,
        label: 'English',
        value: 'en',
      },
      {
        key: 2,
        label: 'Česky',
        value: 'cs',
      },
    ];
  }, []);
  const modeMenuItems = useMemo(() => {
    return [
      {
        key: 1,
        label: 'Light',
        value: themeModeKeys.light,
      },
      {
        key: 2,
        label: 'Dark',
        value: themeModeKeys.dark,
      },
    ];
  }, []);

  return (
    <>
      <IconButton
        id={`${idPrefix}_button`}
        aria-controls={open ? `${idPrefix}_menu` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        color="inherit"
        onClick={clickHandler}
      >
        <TuneIcon />
      </IconButton>
      <Menu
        id={`${idPrefix}_menu`}
        anchorEl={anchorEl}
        open={open}
        onClose={closeHandler}
        MenuListProps={{
          'aria-labelledby': `${idPrefix}_button`,
          sx: {
            paddingY: 0,
          },
        }}
      >
        {languageMenuItems.map((item) => {
          const isSelected = item.value === i18n.language;

          return (
            <MenuItem key={item.key} selected={isSelected} onClick={() => switchLanguageHandler(item.value)} dense>
              {isSelected ? (
                <>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  {item.label}
                </>
              ) : (
                <ListItemText inset>{item.label}</ListItemText>
              )}
            </MenuItem>
          );
        })}
        <Divider />
        {modeMenuItems.map((item) => {
          const isSelected = item.value === mode;

          return (
            <MenuItem key={item.key} selected={isSelected} onClick={() => switchThemeModeHandler(item.value)} dense>
              {isSelected ? (
                <>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>
                  {item.label}
                </>
              ) : (
                <ListItemText inset>{item.label}</ListItemText>
              )}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default ConfigMenu;
