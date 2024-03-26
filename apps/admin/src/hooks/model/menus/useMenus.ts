import useSWR, { SWRConfiguration } from 'swr';
import { MenusList } from '@blueprint/types';
import { API_MODEL } from '../../../config';

const fetcher = () => fetch(API_MODEL.menus).then((res) => res.json());

export const useMenus = (config?: SWRConfiguration) => {
  const { data, error, isLoading, ...rest } = useSWR<MenusList>({}, fetcher, config);

  return {
    menus: data ?? [],
    menusLoading: isLoading,
    menusError: error,
    ...rest,
  };
};
