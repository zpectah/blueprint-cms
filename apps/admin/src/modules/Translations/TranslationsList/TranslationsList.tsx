import React from 'react';
import { TranslationsItem } from '@blueprint/types';
import { DataList } from '../../../components';
import { useTranslations } from '../../../hooks';

const TranslationsList = () => {
  const { translations } = useTranslations();

  return (
    <div>
      <DataList<TranslationsItem> model="translations" items={translations} />
    </div>
  );
};

export default TranslationsList;
