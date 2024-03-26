import useSWR, { SWRConfiguration } from 'swr';
import { PagesList } from '@blueprint/types';
import { API_MODEL } from '../../../config';

const fetcher = () => fetch(API_MODEL.pages).then((res) => res.json());

export const usePages = (config?: SWRConfiguration) => {
  const { data, error, isLoading, ...rest } = useSWR<PagesList>({}, fetcher, config);

  return {
    pages: data ?? [],
    pagesLoading: isLoading,
    pagesError: error,
    ...rest,
  };
};
