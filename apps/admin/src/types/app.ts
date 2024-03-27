export interface AppRoutes {
  [key: string]: { path: string; panels?: { [key: string]: string } };
}
