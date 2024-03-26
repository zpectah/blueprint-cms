import useSWR, { SWRConfiguration } from 'swr';
import { FilesList } from '@blueprint/types';
import { API_MODEL } from '../../../config';

const fetcher = () => fetch(API_MODEL.files).then((res) => res.json());

export const useFiles = (config?: SWRConfiguration) => {
  const { data, error, isLoading, ...rest } = useSWR<FilesList>({}, fetcher, config);

  return {
    files: data ?? [],
    filesLoading: isLoading,
    filesError: error,
    ...rest,
  };
};
