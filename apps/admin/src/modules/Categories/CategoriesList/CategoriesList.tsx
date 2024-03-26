import React from 'react';
import { CategoriesItem } from '@blueprint/types';
import { DataList } from '../../../components';
import { useCategories } from '../../../hooks';

const CategoriesList = () => {
  const { categories } = useCategories();

  return (
    <div>
      <DataList<CategoriesItem> model="categories" items={categories} />
    </div>
  );
};

export default CategoriesList;
