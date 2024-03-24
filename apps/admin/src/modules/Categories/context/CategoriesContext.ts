import { createContext, useContext } from 'react';
import { FormResponseItem } from '../../../types';
import { ICategoriesDetailForm } from '../types';
import { CATEGORIES_DETAIL_FORM_DEFAULTS } from '../constants';

interface CategoriesContextProps {
  detailData: ICategoriesDetailForm;
  setDetailData: (data: ICategoriesDetailForm) => void;
  responseSnack: FormResponseItem | null;
  setResponseSnack: (snack: FormResponseItem | null) => void;
  isFormDirty: boolean;
  setFormDirty: (dirty: boolean) => void;
}

const defaultContext: CategoriesContextProps = {
  detailData: CATEGORIES_DETAIL_FORM_DEFAULTS,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDetailData: () => {},
  responseSnack: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setResponseSnack: () => {},
  isFormDirty: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFormDirty: () => {},
};

const CategoriesContext = createContext(defaultContext);

export const CategoriesContextProvider = CategoriesContext.Provider;
export const CategoriesContextConsumer = CategoriesContext.Consumer;

export const useCategoriesContext = () => useContext(CategoriesContext);

export default CategoriesContext;
