import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { NEW_DETAIL_ID } from '../../constants';
import { useMembersTranslations } from '../../hooks';
import { ViewLayout } from '../../components';
import { MembersContextProvider } from './context';
import { useMembersContextValue } from './hooks';
import { MembersList } from './MembersList';
import { MembersDetail } from './MembersDetail';

const Members = () => {
  const { t, mt } = useMembersTranslations();
  const providerValue = useMembersContextValue();

  return (
    <MembersContextProvider value={providerValue}>
      <ViewLayout
        title={mt['page.title']}
        subtitle={mt['page.subtitle']}
        meta={{
          title: mt['page.meta.title'],
        }}
        actions={
          <Button
            component={Link}
            to={`${ROUTES.members.path}/${NEW_DETAIL_ID}`}
            variant="contained"
            color="primary"
            size="large"
          >
            {t('label.members_new')}
          </Button>
        }
      >
        <MembersList />
        <MembersDetail />
      </ViewLayout>
    </MembersContextProvider>
  );
};

export default Members;
