import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import { ViewLayout } from '../../components';
import { ROUTES } from '../../config';
import { WithChildren } from '../../types';

interface TabPanelProps extends WithChildren {
  title?: string;
  index: string;
  value: string;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, title, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {title && (
            <Typography variant="h3" component="h3">
              {title}
            </Typography>
          )}
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: string) {
  return {
    id: `settings-tab-${index}`,
    'aria-controls': `settings-tabpanel-${index}`,
    value: index,
  };
}

const Settings = () => {
  const [value, setValue] = useState<string>('global');

  const { panel } = useParams();
  const navigate = useNavigate();

  const changeHandler = (event: React.SyntheticEvent, value: string) => {
    if (value === ROUTES.settings.panels.global) {
      navigate(`${ROUTES.settings.path}/`);
    } else {
      navigate(`${ROUTES.settings.path}/${value}`);
    }
  };

  useEffect(() => {
    setValue(panel ?? 'global');
  }, [panel]);

  return (
    <ViewLayout
      title="Settings"
      meta={{
        title: 'Settings',
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={changeHandler} aria-label="settings form tabs">
            <Tab label="Global" {...a11yProps(ROUTES.settings.panels.global)} />
            <Tab label="Client" {...a11yProps(ROUTES.settings.panels.client)} />
            <Tab label="Locales" {...a11yProps(ROUTES.settings.panels.locales)} />
            <Tab label="Admin" {...a11yProps(ROUTES.settings.panels.admin)} />
            <Tab label="System" {...a11yProps(ROUTES.settings.panels.system)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={ROUTES.settings.panels.global} title="Global">
          Item Global
        </CustomTabPanel>
        <CustomTabPanel value={value} index={ROUTES.settings.panels.client} title="Client">
          Item Client
        </CustomTabPanel>
        <CustomTabPanel value={value} index={ROUTES.settings.panels.locales} title="Locales">
          Item Locales
        </CustomTabPanel>
        <CustomTabPanel value={value} index={ROUTES.settings.panels.admin} title="Admin">
          Item Admin
        </CustomTabPanel>
        <CustomTabPanel value={value} index={ROUTES.settings.panels.system} title="System">
          Item System
        </CustomTabPanel>
      </Box>
    </ViewLayout>
  );
};

export default Settings;
