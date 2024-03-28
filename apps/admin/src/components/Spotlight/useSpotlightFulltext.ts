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

export const useSpotlightFulltext = () => {
  const t_categories = useCategoriesTranslations();
  const t_dashboard = useDashboardTranslations();
  const t_files = useFilesTranslations();
  const t_help = useHelpTranslations();
  const t_menus = useMenusTranslations();
  const t_messages = useMessagesTranslations();
  const t_pages = usePagesTranslations();
  const t_posts = usePostsTranslations();
  const t_profile = useProfileTranslations();
  const t_settings = useSettingsTranslations();
  const t_tags = useTagsTranslations();
  const t_translations = useTranslationsTranslations();
  const t_users = useUsersTranslations();

  const translations = {
    [spotlightIndexKeys.categories]: [...Object.values(t_categories.mt)],
    [spotlightIndexKeys.dashboard]: [...Object.values(t_dashboard.mt)],
    [spotlightIndexKeys.files]: [...Object.values(t_files.mt)],
    [spotlightIndexKeys.help]: [...Object.values(t_help.mt)],
    [spotlightIndexKeys.menus]: [...Object.values(t_menus.mt)],
    [spotlightIndexKeys.messages]: [...Object.values(t_messages.mt)],
    [spotlightIndexKeys.pages]: [...Object.values(t_pages.mt)],
    [spotlightIndexKeys.posts]: [...Object.values(t_posts.mt)],
    [spotlightIndexKeys.profile]: [...Object.values(t_profile.mt)],
    [spotlightIndexKeys.settings]: [...Object.values(t_settings.mt)],
    [spotlightIndexKeys.tags]: [...Object.values(t_tags.mt)],
    [spotlightIndexKeys.translations]: [...Object.values(t_translations.mt)],
    [spotlightIndexKeys.users]: [...Object.values(t_users.mt)],
  };
  const model = {};

  return {
    translations,
    model,
  };
};
