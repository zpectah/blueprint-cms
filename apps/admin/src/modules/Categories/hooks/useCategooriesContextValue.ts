import { useState } from 'react';
import { FormResponseItem } from '../../../types';
import { ICategoriesDetailForm } from '../types';
import { CATEGORIES_DETAIL_FORM_DEFAULTS } from '../constants';

export const useCategoriesContextValue = () => {
  const [detailData, setDetailData] = useState<ICategoriesDetailForm>(CATEGORIES_DETAIL_FORM_DEFAULTS);
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
