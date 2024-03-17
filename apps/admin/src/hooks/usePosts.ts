export const usePosts = () => {
  const posts: unknown[] = [];

  const getDetail = (id: number | string | undefined) => {
    if (!id) return {};

    return {
      id: id,
    };
  };

  return {
    posts,
    getDetail,
  };
};
