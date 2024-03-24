import { createContext, useContext } from 'react';
import { FormResponseItem } from '../../../types';
import { IFilesDetailForm } from '../types';
import { FILES_DETAIL_FORM_DEFAULTS } from '../constants';

interface FilesContextProps {
  detailData: IFilesDetailForm;
  setDetailData: (data: IFilesDetailForm) => void;
  responseSnack: FormResponseItem | null;
  setResponseSnack: (snack: FormResponseItem | null) => void;
  isFormDirty: boolean;
  setFormDirty: (dirty: boolean) => void;
}

const defaultContext: FilesContextProps = {
  detailData: FILES_DETAIL_FORM_DEFAULTS,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDetailData: () => {},
  responseSnack: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setResponseSnack: () => {},
  isFormDirty: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFormDirty: () => {},
};

const FilesContext = createContext(defaultContext);

export const FilesContextProvider = FilesContext.Provider;
export const FilesContextConsumer = FilesContext.Consumer;

export const useFilesContext = () => useContext(FilesContext);

export default FilesContext;
