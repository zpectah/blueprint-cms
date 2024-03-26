import useSWR, { SWRConfiguration } from 'swr';
import { MenusItem } from '@blueprint/types';
import { API_MODEL } from '../../../config';

const fetcher = (id: string) => fetch(`${API_MODEL.menusDetail}${id}`).then((res) => res.json());

export const useMenusDetail = (id?: string, config?: SWRConfiguration) => {
  const { data, error, isLoading, ...rest } = useSWR<MenusItem>(id !== 'new' && id, fetcher, config);

  return {
    detail: data,
    detailLoading: isLoading,
    detailError: error,
    ...rest,
  };
};
