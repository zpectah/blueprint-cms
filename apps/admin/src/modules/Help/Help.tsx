import React from 'react';
import { useTranslation } from 'react-i18next';
import { ViewLayout } from '../../components';

const Help = () => {
  const { t } = useTranslation(['common', 'help']);

  return (
    <ViewLayout
      title={t('help:page.title')}
      subtitle={t('help:page.subtitle')}
      meta={{
        title: t('help:page.meta.title'),
      }}
    >
      Help Module View
      <br />
      Accordion list
    </ViewLayout>
  );
};

export default Help;
