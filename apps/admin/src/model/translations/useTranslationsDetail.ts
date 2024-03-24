import useSWR, { SWRConfiguration } from 'swr';
import { TranslationsItem } from '@blueprint/types';
import { API_MODEL } from '../../config';

const fetcher = (id: string) => fetch(`${API_MODEL.translationsDetail}${id}`).then((res) => res.json());

export const useTranslationsDetail = (id?: string, config?: SWRConfiguration) => {
  const { data, error, isLoading, ...rest } = useSWR<TranslationsItem>(id !== 'new' && id, fetcher, config);

  return {
    detail: data,
    detailLoading: isLoading,
    detailError: error,
    ...rest,
  };
};
