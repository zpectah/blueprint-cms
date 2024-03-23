import React from 'react';
import { ViewLayout } from '../../components';

const Help = () => {
  return (
    <ViewLayout
      title="Help"
      subtitle="Some help module text ..."
      meta={{
        title: 'Help',
      }}
    >
      Help Module View
      <br />
      Accordion list
    </ViewLayout>
  );
};

export default Help;
