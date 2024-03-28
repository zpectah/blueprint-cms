import { useState } from 'react';
import { FormResponseItem, ITagsDetailForm } from '../../../types';
import { TAGS_DETAIL_FORM_DEFAULTS } from '../constants';

export const useTagsContextValue = () => {
  const [detailData, setDetailData] = useState<ITagsDetailForm>(TAGS_DETAIL_FORM_DEFAULTS);
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
