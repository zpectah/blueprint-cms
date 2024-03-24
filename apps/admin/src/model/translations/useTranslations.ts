import useSWR, { SWRConfiguration } from 'swr';
import { TranslationsList } from '@blueprint/types';
import { API_MODEL } from '../../config';

const fetcher = () => fetch(API_MODEL.translations).then((res) => res.json());

export const useTranslations = (config?: SWRConfiguration) => {
  const { data, error, isLoading, ...rest } = useSWR<TranslationsList>({}, fetcher, config);

  return {
    translations: data ?? [],
    translationsLoading: isLoading,
    translationsError: error,
    ...rest,
  };
};
