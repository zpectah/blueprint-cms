import { useState } from 'react';
import { IUsersDetailForm } from '../types';
import { USERS_DETAIL_FORM_DEFAULTS } from '../constants';

export const useUsers = () => {
  const [detailData, setDetailData] = useState<IUsersDetailForm>(USERS_DETAIL_FORM_DEFAULTS);
  const [responseSnack, setResponseSnack] = useState<{
    state: 'success' | 'warning' | 'error';
    message: string;
  } | null>(null);

  return {
    responseSnack,
    setResponseSnack,
    detailData,
    setDetailData,
  };
};
