import { createContext, useContext } from 'react';
import { FormResponseItem } from '../../../types';
import { ITagsDetailForm } from '../types';
import { TAGS_DETAIL_FORM_DEFAULTS } from '../constants';

interface TagsContextProps {
  detailData: ITagsDetailForm;
  setDetailData: (data: ITagsDetailForm) => void;
  responseSnack: FormResponseItem | null;
  setResponseSnack: (snack: FormResponseItem | null) => void;
  isFormDirty: boolean;
  setFormDirty: (dirty: boolean) => void;
}

const defaultContext: TagsContextProps = {
  detailData: TAGS_DETAIL_FORM_DEFAULTS,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDetailData: () => {},
  responseSnack: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setResponseSnack: () => {},
  isFormDirty: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFormDirty: () => {},
};

const TagsContext = createContext(defaultContext);

export const TagsContextProvider = TagsContext.Provider;
export const TagsContextConsumer = TagsContext.Consumer;

export const useTagsContext = () => useContext(TagsContext);

export default TagsContext;
