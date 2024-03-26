import React from 'react';
import { PagesItem } from '@blueprint/types';
import { DataList } from '../../../components';
import { usePages } from '../../../hooks';

const PagesList = () => {
  const { pages } = usePages();

  return (
    <div>
      <DataList<PagesItem> model="pages" items={pages} />
    </div>
  );
};

export default PagesList;
