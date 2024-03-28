import { createContext, useContext } from 'react';
import { FormResponseItem, IPostsDetailForm } from '../../../types';
import { POSTS_DETAIL_FORM_DEFAULTS } from '../constants';

interface PostsContextProps {
  detailData: IPostsDetailForm;
  setDetailData: (data: IPostsDetailForm) => void;
  responseSnack: FormResponseItem | null;
  setResponseSnack: (snack: FormResponseItem | null) => void;
  isFormDirty: boolean;
  setFormDirty: (dirty: boolean) => void;
}

const defaultContext: PostsContextProps = {
  detailData: POSTS_DETAIL_FORM_DEFAULTS,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDetailData: () => {},
  responseSnack: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setResponseSnack: () => {},
  isFormDirty: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFormDirty: () => {},
};

const PostsContext = createContext(defaultContext);

export const PostsContextProvider = PostsContext.Provider;
export const PostsContextConsumer = PostsContext.Consumer;

export const usePostsContext = () => useContext(PostsContext);

export default PostsContext;
