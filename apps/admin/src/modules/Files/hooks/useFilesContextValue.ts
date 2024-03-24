import { useState } from 'react';
import { FormResponseItem } from '../../../types';
import { IFilesDetailForm } from '../types';
import { FILES_DETAIL_FORM_DEFAULTS } from '../constants';

export const useFilesContextValue = () => {
  const [detailData, setDetailData] = useState<IFilesDetailForm>(FILES_DETAIL_FORM_DEFAULTS);
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
