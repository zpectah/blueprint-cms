import { useState } from 'react';
import { FormResponseItem } from '../../../types';
import { ITranslationsDetailForm } from '../types';
import { TRANSLATIONS_DETAIL_FORM_DEFAULTS } from '../constants';

export const useTranslationsContextValue = () => {
  const [detailData, setDetailData] = useState<ITranslationsDetailForm>(TRANSLATIONS_DETAIL_FORM_DEFAULTS);
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
