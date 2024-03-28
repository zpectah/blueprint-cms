export interface DataListProps<T> {
  items: T[];
  model:
    | 'posts'
    | 'users'
    | 'files'
    | 'members'
    | 'categories'
    | 'pages'
    | 'tags'
    | 'translations'
    | 'messages'
    | 'menus'
    | 'menusItems';
}
