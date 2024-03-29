import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../config';
import { DataListProps } from './types';

type Item = {
  id: string;
};

const DataList = <T extends Item>({ items, model }: DataListProps<T>) => {
  const navigate = useNavigate();

  const routes = {
    posts: ROUTES.posts.path,
    users: ROUTES.users.path,
    files: ROUTES.files.path,
    categories: ROUTES.categories.path,
    menus: ROUTES.menus.path,
    messages: ROUTES.messages.path,
    pages: ROUTES.pages.path,
    tags: ROUTES.tags.path,
    translations: ROUTES.translations.path,
    members: ROUTES.members.path,
  };

  const detailClickHandler = (id: string) => {
    // eslint-disable-next-line
    // @ts-ignore
    navigate(`${routes[model]}/${id}`);
  };

  return (
    <>
      {/* TODO */}
      ...Data List...
      <br />
      <div>
        {items.map((item) => (
          <div key={item.id}>
            item | {item.id}| <button onClick={() => detailClickHandler(item.id)}>detail</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default DataList;
