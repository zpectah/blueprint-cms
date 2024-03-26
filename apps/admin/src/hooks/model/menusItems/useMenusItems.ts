import useSWR, { SWRConfiguration } from 'swr';
import { MenuItemsItem } from '@blueprint/types';
import { API_MODEL } from '../../../config';

const fetcher = () => fetch(API_MODEL.menusItems).then((res) => res.json());

export const useMenusItems = (config?: SWRConfiguration) => {
  const { data, error, isLoading, ...rest } = useSWR<MenuItemsItem>({}, fetcher, config);

  return {
    menusItems: data ?? [],
    menusItemsLoading: isLoading,
    menusItemsError: error,
    ...rest,
  };
};
