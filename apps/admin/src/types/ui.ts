import { themeModeKeys, formResponseStateKeys } from '../enums';

export type ThemeMode = keyof typeof themeModeKeys;

export type FormResponseState = keyof typeof formResponseStateKeys;

export interface FormResponseItem {
  state: FormResponseState;
  message: string;
}
