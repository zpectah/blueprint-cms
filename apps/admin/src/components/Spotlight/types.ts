import { spotlightIndexKeys } from '../../enums';

export interface SpotlightContextProps {
  query: string;
  setQuery: (query: string) => void;
}

export interface SpotlightResultItem {
  index: number;
  scope: 'index' | 'api';
  name: string;
  value: string;
}

export interface SpotlightResultModel {
  index: number;
  model: string;
  results: SpotlightResultItem[];
  path: string;
}

export type SpotlightTranslation = keyof typeof spotlightIndexKeys;
