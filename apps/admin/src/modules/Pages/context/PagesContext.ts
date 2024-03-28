import { createContext, useContext } from 'react';
import { FormResponseItem, IPagesDetailForm } from '../../../types';
import { PAGES_DETAIL_FORM_DEFAULTS } from '../constants';

interface PagesContextProps {
  detailData: IPagesDetailForm;
  setDetailData: (data: IPagesDetailForm) => void;
  responseSnack: FormResponseItem | null;
  setResponseSnack: (snack: FormResponseItem | null) => void;
  isFormDirty: boolean;
  setFormDirty: (dirty: boolean) => void;
}

const defaultContext: PagesContextProps = {
  detailData: PAGES_DETAIL_FORM_DEFAULTS,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDetailData: () => {},
  responseSnack: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setResponseSnack: () => {},
  isFormDirty: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFormDirty: () => {},
};

const PagesContext = createContext(defaultContext);

export const PagesContextProvider = PagesContext.Provider;
export const PagesContextConsumer = PagesContext.Consumer;

export const usePagesContext = () => useContext(PagesContext);

export default PagesContext;
