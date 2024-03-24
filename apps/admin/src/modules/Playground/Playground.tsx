import React, { Suspense } from 'react';
// import { useTranslation } from 'react-i18next';
import { DialogLayout } from '../../components';
import { Button, Typography, Stack } from '@mui/material';

const Playground = () => {
  // const { t } = useTranslation();

  return (
    <DialogLayout
      meta={{
        title: 'Playground',
      }}
      disableFooter
    >
      <div>
        <div>
          <Typography variant="h1">Typography H1: [hero title, "super title"]</Typography>
          <Typography variant="h2">Typography H2: [page title]</Typography>
          <Typography variant="h3">Typography H3: [dialog title, drawer title, panel title]</Typography>
          <Typography variant="h4">Typography H4: [card title]</Typography>
          <Typography variant="h5">Typography H5</Typography>
          <Typography variant="h6">Typography H6</Typography>
        </div>
        <div>
          <Typography variant="subtitle1">subtitle1: [page subtitle]</Typography>
          <Typography variant="subtitle2">subtitle2: [dialog subtile, drawer subtitle, card subtitle]</Typography>
        </div>
        <div>
          <Typography variant="body1">body1</Typography>
          <Typography variant="body2">body2</Typography>
        </div>
        <div>
          <Typography variant="button" component="div">
            button
          </Typography>
          <Typography variant="caption" component="div">
            caption
          </Typography>
          <Typography variant="overline" component="div">
            overline
          </Typography>
        </div>
      </div>
      <Stack direction="column" gap="1rem">
        <Stack direction="row" gap="1rem">
          <Button>Button Primary</Button>
          <Button variant="outlined">Button Primary</Button>
          <Button variant="contained">Button Primary</Button>
        </Stack>
        <Stack direction="row" gap="1rem">
          <Button color="secondary">Button Secondary</Button>
          <Button color="secondary" variant="outlined">
            Button Secondary
          </Button>
          <Button color="secondary" variant="contained">
            Button Secondary
          </Button>
        </Stack>
      </Stack>
    </DialogLayout>
  );
};

export default Playground;
