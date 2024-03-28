import { useMemo } from 'react';
import { useSpotlightFulltext } from './useSpotlightFulltext';
import { ROUTES } from '../../config';
import { SpotlightResultItem, SpotlightResultModel, SpotlightTranslation } from './types';
import { useSpotlightContext } from './SpotlightContext';

export const useSpotlightResults = () => {
  const { translations } = useSpotlightFulltext();
  const { query } = useSpotlightContext();

  const results = useMemo(() => {
    let modelResults: SpotlightResultModel[] = [];
    const translationsKeys = Object.keys(translations);

    if (query.length > 3) {
      // Searching in translations
      translationsKeys.forEach((item, index) => {
        const modelItems = translations[item as SpotlightTranslation];
        const itemResults: SpotlightResultItem[] = [];

        modelItems.forEach((string, ix) => {
          const string_clean = string.toLowerCase();
          const query_clean = query.toLowerCase();

          if (string_clean.search(query_clean) > -1) {
            itemResults.push({
              index: ix,
              scope: 'index',
              name: item,
              value: string,
            });
          }
        });

        if (itemResults.length > 0) {
          modelResults.push({
            index,
            model: item,
            results: itemResults,
            path: ROUTES[item]?.path,
          });
        }
      });

      // TODO
      // Search in model items
    } else {
      modelResults = [];
    }

    return modelResults;
  }, [query, translations]);

  return {
    results,
  };
};
