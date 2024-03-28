import { useState } from 'react';
import { FormResponseItem, IMessagesDetailForm } from '../../../types';
import { MESSAGES_DETAIL_FORM_DEFAULTS } from '../constants';

export const useMessagesContextValue = () => {
  const [detailData, setDetailData] = useState<IMessagesDetailForm>(MESSAGES_DETAIL_FORM_DEFAULTS);
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
