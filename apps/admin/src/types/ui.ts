import { formResponseStateKeys } from '../enums';

export type FormResponseState = keyof typeof formResponseStateKeys;

export interface FormResponseItem {
  state: FormResponseState;
  message: string;
}
