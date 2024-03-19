export interface DataListProps<T> {
  items: T[];
  model: 'posts' | 'users' | 'files';
}
