import useSWR, { SWRConfiguration } from 'swr';
import { PagesItem } from '@blueprint/types';
import { API_MODEL } from '../../config';

const fetcher = (id: string) => fetch(`${API_MODEL.pagesDetail}${id}`).then((res) => res.json());

export const usePagesDetail = (id?: string, config?: SWRConfiguration) => {
  const { data, error, isLoading, ...rest } = useSWR<PagesItem>(id !== 'new' && id, fetcher, config);

  return {
    detail: data,
    detailLoading: isLoading,
    detailError: error,
    ...rest,
  };
};
