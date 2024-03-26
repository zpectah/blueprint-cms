import useSWR, { SWRConfiguration } from 'swr';
import { CategoriesItem } from '@blueprint/types';
import { API_MODEL } from '../../../config';

const fetcher = (id: string) => fetch(`${API_MODEL.categoriesDetail}${id}`).then((res) => res.json());

export const useCategoriesDetail = (id?: string, config?: SWRConfiguration) => {
  const { data, error, isLoading, ...rest } = useSWR<CategoriesItem>(id !== 'new' && id, fetcher, config);

  return {
    detail: data,
    detailLoading: isLoading,
    detailError: error,
    ...rest,
  };
};
