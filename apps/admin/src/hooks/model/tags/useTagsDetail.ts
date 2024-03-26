import useSWR, { SWRConfiguration } from 'swr';
import { TagsItem } from '@blueprint/types';
import { API_MODEL } from '../../../config';

const fetcher = (id: string) => fetch(`${API_MODEL.tagsDetail}${id}`).then((res) => res.json());

export const useTagsDetail = (id?: string, config?: SWRConfiguration) => {
  const { data, error, isLoading, ...rest } = useSWR<TagsItem>(id !== 'new' && id, fetcher, config);

  return {
    detail: data,
    detailLoading: isLoading,
    detailError: error,
    ...rest,
  };
};
