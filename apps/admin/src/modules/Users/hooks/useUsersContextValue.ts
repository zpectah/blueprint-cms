import { useState } from 'react';
import { FormResponseItem } from '../../../types';
import { IUsersDetailForm } from '../types';
import { USERS_DETAIL_FORM_DEFAULTS } from '../constants';

export const useUsersContextValue = () => {
  const [detailData, setDetailData] = useState<IUsersDetailForm>(USERS_DETAIL_FORM_DEFAULTS);
  const [responseSnack, setResponseSnack] = useState<FormResponseItem | null>(null);
  const [isFormDirty, setFormDirty] = useState(false);

  return {
    responseSnack,
    setResponseSnack,
    detailData,
    setDetailData,
    isFormDirty,
    setFormDirty,
  };
};
