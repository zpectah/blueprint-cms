import { useState } from 'react';
import { FormResponseItem } from '../../../types';
import { IPagesDetailForm } from '../types';
import { PAGES_DETAIL_FORM_DEFAULTS } from '../constants';

export const usePagesContextValue = () => {
  const [detailData, setDetailData] = useState<IPagesDetailForm>(PAGES_DETAIL_FORM_DEFAULTS);
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
