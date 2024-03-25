import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useFilesTranslations = () => {
  const namespace = 'files';

  const i18n = useTranslation(['common', namespace]);

  const { t } = i18n;

  const moduleTranslations = useMemo(
    () => ({
      'page.title': t(`${namespace}:page.title`),
      'page.subtitle': t(`${namespace}:page.subtitle`),
      'page.meta.title': t(`${namespace}:page.meta.title`),
    }),
    [t]
  );

  return {
    mt: moduleTranslations,
    ...i18n,
  };
};
