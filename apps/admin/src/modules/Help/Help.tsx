import React from 'react';
import { ViewLayout } from '../../components';
import { useHelpTranslations } from '../../hooks';

const Help = () => {
  const { mt } = useHelpTranslations();

  return (
    <ViewLayout
      title={mt['page.title']}
      subtitle={mt['page.subtitle']}
      meta={{
        title: mt['page.meta.title'],
      }}
    >
      Help Module View
      <br />
      Accordion list
    </ViewLayout>
  );
};

export default Help;
