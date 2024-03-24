import { createContext, useContext } from 'react';
import { FormResponseItem } from '../../../types';
import { ITranslationsDetailForm } from '../types';
import { TRANSLATIONS_DETAIL_FORM_DEFAULTS } from '../constants';

interface TranslationsContextProps {
  detailData: ITranslationsDetailForm;
  setDetailData: (data: ITranslationsDetailForm) => void;
  responseSnack: FormResponseItem | null;
  setResponseSnack: (snack: FormResponseItem | null) => void;
  isFormDirty: boolean;
  setFormDirty: (dirty: boolean) => void;
}

const defaultContext: TranslationsContextProps = {
  detailData: TRANSLATIONS_DETAIL_FORM_DEFAULTS,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDetailData: () => {},
  responseSnack: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setResponseSnack: () => {},
  isFormDirty: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFormDirty: () => {},
};

const TranslationsContext = createContext(defaultContext);

export const TranslationsContextProvider = TranslationsContext.Provider;
export const TranslationsContextConsumer = TranslationsContext.Consumer;

export const useTranslationsContext = () => useContext(TranslationsContext);

export default TranslationsContext;
