import { createContext, useContext } from 'react';
import { FormResponseItem, IMessagesDetailForm } from '../../../types';
import { MESSAGES_DETAIL_FORM_DEFAULTS } from '../constants';

interface MessagesContextProps {
  detailData: IMessagesDetailForm;
  setDetailData: (data: IMessagesDetailForm) => void;
  responseSnack: FormResponseItem | null;
  setResponseSnack: (snack: FormResponseItem | null) => void;
  isFormDirty: boolean;
  setFormDirty: (dirty: boolean) => void;
}

const defaultContext: MessagesContextProps = {
  detailData: MESSAGES_DETAIL_FORM_DEFAULTS,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDetailData: () => {},
  responseSnack: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setResponseSnack: () => {},
  isFormDirty: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFormDirty: () => {},
};

const MessagesContext = createContext(defaultContext);

export const MessagesContextProvider = MessagesContext.Provider;
export const MessagesContextConsumer = MessagesContext.Consumer;

export const useMessagesContext = () => useContext(MessagesContext);

export default MessagesContext;
