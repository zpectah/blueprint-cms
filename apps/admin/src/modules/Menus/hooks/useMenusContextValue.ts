import { useState } from 'react';
import { FormResponseItem } from '../../../types';
import { IMenusDetailForm } from '../types';
import { MENUS_DETAIL_FORM_DEFAULTS } from '../constants';

export const useMenusContextValue = () => {
  const [detailData, setDetailData] = useState<IMenusDetailForm>(MENUS_DETAIL_FORM_DEFAULTS);
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
