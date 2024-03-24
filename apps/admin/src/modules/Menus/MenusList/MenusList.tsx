import React from 'react';
import { MenusItem } from '@blueprint/types';
import { DataList } from '../../../components';
import { useMenus } from '../../../model';

const MenusList = () => {
  const { menus } = useMenus();

  return (
    <div>
      <DataList<MenusItem> model="menus" items={menus} />
    </div>
  );
};

export default MenusList;
