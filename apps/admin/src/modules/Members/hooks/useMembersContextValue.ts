import { useState } from 'react';
import { FormResponseItem, IMembersDetailForm } from '../../../types';
import { MEMBERS_DETAIL_FORM_DEFAULTS } from '../constants';

export const useMembersContextValue = () => {
  const [detailData, setDetailData] = useState<IMembersDetailForm>(MEMBERS_DETAIL_FORM_DEFAULTS);
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
