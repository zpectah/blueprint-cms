import { createContext, useContext } from 'react';
import { FormResponseItem } from '../../../types';
import { IMenusDetailForm } from '../types';
import { MENUS_DETAIL_FORM_DEFAULTS } from '../constants';

interface MenusContextProps {
  detailData: IMenusDetailForm;
  setDetailData: (data: IMenusDetailForm) => void;
  responseSnack: FormResponseItem | null;
  setResponseSnack: (snack: FormResponseItem | null) => void;
  isFormDirty: boolean;
  setFormDirty: (dirty: boolean) => void;
}

const defaultContext: MenusContextProps = {
  detailData: MENUS_DETAIL_FORM_DEFAULTS,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setDetailData: () => {},
  responseSnack: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setResponseSnack: () => {},
  isFormDirty: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setFormDirty: () => {},
};

const MenusContext = createContext(defaultContext);

export const MenusContextProvider = MenusContext.Provider;
export const MenusContextConsumer = MenusContext.Consumer;

export const useMenusContext = () => useContext(MenusContext);

export default MenusContext;
