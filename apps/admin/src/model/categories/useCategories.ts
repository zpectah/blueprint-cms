import useSWR, { SWRConfiguration } from 'swr';
import { CategoriesList } from '@blueprint/types';
import { API_MODEL } from '../../config';

const fetcher = () => fetch(API_MODEL.categories).then((res) => res.json());

export const useCategories = (config?: SWRConfiguration) => {
  const { data, error, isLoading, ...rest } = useSWR<CategoriesList>({}, fetcher, config);

  return {
    categories: data ?? [],
    categoriesLoading: isLoading,
    categoriesError: error,
    ...rest,
  };
};
