import React from 'react';
import { useProfileTranslations } from '../../hooks';
import { ViewLayout } from '../../components';

const Profile = () => {
  const { mt } = useProfileTranslations();

  return (
    <ViewLayout
      title={mt['page.title']}
      subtitle={mt['page.subtitle']}
      meta={{
        title: mt['page.meta.title'],
      }}
    >
      ...Profile view...
    </ViewLayout>
  );
};

export default Profile;
