import React from 'react';
import { DataListProps } from './types';

const DataList = ({ items = [] }: DataListProps) => {
  return (
    <>
      {/* TODO */}
      ...Data List...
      <br />
      <pre>
        <code>{JSON.stringify(items, null, 2)}</code>
      </pre>
    </>
  );
};

export default DataList;
