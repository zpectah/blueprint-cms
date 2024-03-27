import {
  useCategoriesTranslations,
  useDashboardTranslations,
  useFilesTranslations,
  useHelpTranslations,
  useMenusTranslations,
  useMessagesTranslations,
  usePagesTranslations,
  usePostsTranslations,
  useProfileTranslations,
  useSettingsTranslations,
  useTagsTranslations,
  useTranslationsTranslations,
  useUsersTranslations,
} from '../../hooks';
import { spotlightIndexKeys } from '../../enums';

export const useSpotlightIndexes = () => {
  const categories = useCategoriesTranslations();
  const dashboard = useDashboardTranslations();
  const files = useFilesTranslations();
  const help = useHelpTranslations();
  const menus = useMenusTranslations();
  const messages = useMessagesTranslations();
  const pages = usePagesTranslations();
  const posts = usePostsTranslations();
  const profile = useProfileTranslations();
  const settings = useSettingsTranslations();
  const tags = useTagsTranslations();
  const translations = useTranslationsTranslations();
  const users = useUsersTranslations();

  const translationsIndexes = {
    [spotlightIndexKeys.categories]: [...Object.values(categories.mt)],
    [spotlightIndexKeys.dashboard]: [...Object.values(dashboard.mt)],
    [spotlightIndexKeys.files]: [...Object.values(files.mt)],
    [spotlightIndexKeys.help]: [...Object.values(help.mt)],
    [spotlightIndexKeys.menus]: [...Object.values(menus.mt)],
    [spotlightIndexKeys.messages]: [...Object.values(messages.mt)],
    [spotlightIndexKeys.pages]: [...Object.values(pages.mt)],
    [spotlightIndexKeys.posts]: [...Object.values(posts.mt)],
    [spotlightIndexKeys.profile]: [...Object.values(profile.mt)],
    [spotlightIndexKeys.settings]: [...Object.values(settings.mt)],
    [spotlightIndexKeys.tags]: [...Object.values(tags.mt)],
    [spotlightIndexKeys.translations]: [...Object.values(translations.mt)],
    [spotlightIndexKeys.users]: [...Object.values(users.mt)],
  };

  return {
    translations: translationsIndexes,
  };
};
