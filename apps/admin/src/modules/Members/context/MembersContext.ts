import { createContext, useContext } from 'react';
import { FormResponseItem, IMembersDetailForm } from '../../../types';
import { MEMBERS_DETAIL_FORM_DEFAULTS } from '../constants';

interface MembersContextProps {
  detailData: IMembersDetailForm;
  setDetailData: (data: IMembersDetailForm) => void;
  responseSnack: FormResponseItem | null;
  setResponseSnack: (snack: FormResponseItem | null) => void;
  isFormDirty: boolean;
  setFormDirty: (dirty: boolean) => void;
}

const defaultContext: MembersContextProps = {
  detailData: MEMBERS_DETAIL_FORM_DEFAULTS,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDetailData: () => {},
  responseSnack: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setResponseSnack: () => {},
  isFormDirty: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFormDirty: () => {},
};

const MembersContext = createContext(defaultContext);

export const MembersContextProvider = MembersContext.Provider;
export const MembersContextConsumer = MembersContext.Consumer;

export const useMembersContext = () => useContext(MembersContext);

export default MembersContext;
