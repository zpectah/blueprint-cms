import { CFG_CMS } from '@blueprint/core';

export interface UseDocumentMetaProps {
  title?: string;
  description?: string;
}

export const useDocumentMeta = (props?: UseDocumentMetaProps) => {
  if (props?.title) document.title = `${props.title && `${props.title} | `}${CFG_CMS.name}`;
  if (props?.description) {
    const descriptionMeta = document.querySelector("meta[name='description']");
    descriptionMeta?.setAttribute('content', props.description);
  }
};
