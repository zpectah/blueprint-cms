import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { ViewLayout } from '../../components';
import FilesList from './FilesList';
import FilesDetail from './FilesDetail';

const Files = () => {
  return (
    <ViewLayout
      title="Files"
      meta={{
        title: 'Files',
      }}
      actions={
        <Button component={Link} to={`${ROUTES.files.path}/new`} variant="contained" color="primary">
          New file
        </Button>
      }
    >
      <FilesList />
      <FilesDetail />
    </ViewLayout>
  );
};

export default Files;
