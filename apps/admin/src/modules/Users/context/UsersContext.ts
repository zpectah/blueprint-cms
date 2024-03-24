import { createContext, useContext } from 'react';
import { FormResponseItem } from '../../../types';
import { IUsersDetailForm } from '../types';
import { USERS_DETAIL_FORM_DEFAULTS } from '../constants';

interface UsersContextProps {
  detailData: IUsersDetailForm;
  setDetailData: (data: IUsersDetailForm) => void;
  responseSnack: FormResponseItem | null;
  setResponseSnack: (snack: FormResponseItem | null) => void;
  isFormDirty: boolean;
  setFormDirty: (dirty: boolean) => void;
}

const defaultContext: UsersContextProps = {
  detailData: USERS_DETAIL_FORM_DEFAULTS,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDetailData: () => {},
  responseSnack: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setResponseSnack: () => {},
  isFormDirty: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFormDirty: () => {},
};

const UsersContext = createContext(defaultContext);

export const UsersContextProvider = UsersContext.Provider;
export const UsersContextConsumer = UsersContext.Consumer;

export const useUsersContext = () => useContext(UsersContext);

export default UsersContext;
