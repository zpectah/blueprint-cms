export interface DataListProps<T> {
  items: T[];
  model:
    | 'posts'
    | 'users'
    | 'files'
    | 'categories'
    | 'pages'
    | 'tags'
    | 'translations'
    | 'messages'
    | 'menus'
    | 'menusItems';
}
