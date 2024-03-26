import React from 'react';
import { FilesItem } from '@blueprint/types';
import { DataList } from '../../../components';
import { useFiles } from '../../../hooks';

const FilesList = () => {
  const { files } = useFiles();

  return (
    <div>
      <DataList<FilesItem> model="files" items={files} />
    </div>
  );
};

export default FilesList;
