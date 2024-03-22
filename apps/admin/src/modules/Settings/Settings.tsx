import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import { ViewLayout } from '../../components';
import { ROUTES } from '../../config';

interface TabPanelProps {
  children?: React.ReactNode;
  index: string;
  value: string;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: string) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
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
    <ViewLayout title="Settings">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={changeHandler} aria-label="basic tabs example">
            <Tab label="Global" {...a11yProps(ROUTES.settings.panels.global)} />
            <Tab label="Client" {...a11yProps(ROUTES.settings.panels.client)} />
            <Tab label="Admin" {...a11yProps(ROUTES.settings.panels.admin)} />
            <Tab label="System" {...a11yProps(ROUTES.settings.panels.system)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={ROUTES.settings.panels.global}>
          Item Global
        </CustomTabPanel>
        <CustomTabPanel value={value} index={ROUTES.settings.panels.client}>
          Item Client
        </CustomTabPanel>
        <CustomTabPanel value={value} index={ROUTES.settings.panels.admin}>
          Item Admin
        </CustomTabPanel>
        <CustomTabPanel value={value} index={ROUTES.settings.panels.system}>
          Item System
        </CustomTabPanel>
      </Box>
    </ViewLayout>
  );
};

export default Settings;
