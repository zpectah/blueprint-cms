import { useState } from 'react';
import { FormResponseItem } from '../../../types';
import { IPostsDetailForm } from '../types';
import { POSTS_DETAIL_FORM_DEFAULTS } from '../constants';

export const usePostsContextValue = () => {
  const [detailData, setDetailData] = useState<IPostsDetailForm>(POSTS_DETAIL_FORM_DEFAULTS);
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
