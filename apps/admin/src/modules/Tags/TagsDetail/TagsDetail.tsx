import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Stack } from '@mui/material';
import { ROUTES } from '../../../config';
import { SPACING_BASE } from '../../../styles';
import { useTagsDetail } from '../../../hooks';
import { NEW_DETAIL_ID } from '../../../constants';
import { DetailDrawer, CheckButton } from '../../../components';
import { TAGS_DETAIL_FORM_DEFAULTS, TAGS_DETAIL_FORM_NEW, TAGS_DETAIL_FORM_ID } from '../constants';
import { useTagsContext } from '../context';
import TagsDetailForm from './TagsDetailForm';

const TagsDetail = () => {
  const { id } = useParams();
  const { detail } = useTagsDetail(id);
  const { setDetailData } = useTagsContext();

  useEffect(() => {
    if (id === NEW_DETAIL_ID) {
      setDetailData(Object.assign(TAGS_DETAIL_FORM_NEW));
    } else {
      // TODO
      // Handle form data on load
      setDetailData(Object.assign(TAGS_DETAIL_FORM_DEFAULTS));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <DetailDrawer
      id={id}
      route={ROUTES.tags.path}
      title="Detail title"
      subtitle="Detail subtitle"
      actions={
        <>
          <Stack direction="row" gap={SPACING_BASE}>
            <Button variant="contained" color="primary" type="submit" form={TAGS_DETAIL_FORM_ID}>
              Submit
            </Button>
            <CheckButton>Save as template</CheckButton>
          </Stack>
          <Button variant="outlined" color="primary">
            Button
          </Button>
        </>
      }
    >
      <>
        ...Tags Detail Form...#{id} ... {detail?.id}
        <br />
        <TagsDetailForm />
      </>
    </DetailDrawer>
  );
};

export default TagsDetail;
