import React from 'react';
import { TagsItem } from '@blueprint/types';
import { DataList } from '../../../components';
import { useTags } from '../../../hooks';

const TagsList = () => {
  const { tags } = useTags();

  return (
    <div>
      <DataList<TagsItem> model="tags" items={tags} />
    </div>
  );
};

export default TagsList;
