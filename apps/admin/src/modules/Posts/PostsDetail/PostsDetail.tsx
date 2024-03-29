import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Stack, TextField } from '@mui/material';
import { ROUTES } from '../../../config';
import { SPACING_BASE } from '../../../styles';
import { usePostsDetail } from '../../../hooks';
import { NEW_DETAIL_ID } from '../../../constants';
import { DetailDrawer, Form, FormBlock, FormField, FormFieldset, CheckButton } from '../../../components';
import { POSTS_DETAIL_FORM_DEFAULTS, POSTS_DETAIL_FORM_NEW } from '../constants';
import { usePostsContext } from '../context';
import PostsDetailForm from './PostsDetailForm';

const PostsDetail = () => {
  const { id } = useParams();
  const { detail } = usePostsDetail(id);
  const { setDetailData } = usePostsContext();

  useEffect(() => {
    if (id === NEW_DETAIL_ID) {
      setDetailData(Object.assign(POSTS_DETAIL_FORM_NEW));
    } else {
      // TODO
      // Handle form data on load
      setDetailData(Object.assign(POSTS_DETAIL_FORM_DEFAULTS));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <DetailDrawer
      id={id}
      route={ROUTES.posts.path}
      title="Detail title"
      subtitle="Detail subtitle"
      actions={
        <>
          <Stack direction="row" gap={SPACING_BASE}>
            <Button variant="contained" color="primary">
              Button
            </Button>
            <CheckButton>Save as template</CheckButton>
          </Stack>
          <Button variant="outlined" color="secondary">
            Button
          </Button>
        </>
      }
      headerActions={
        <>
          <Button variant="contained" color="primary">
            Button
          </Button>
          <Button variant="contained" color="primary">
            Button
          </Button>
        </>
      }
      sidebar={
        <>
          <p>
            SIDEBAR CONTENT
            <br />
            Tristique dui, odio augue ut hendrerit donec cras dictum consequat varius, metus maximus dolor quis aliquam.
            Augue vitae massa, id dolor fermentum libero sed id tortor dui ut posuere, donec non congue tortor mattis.
            Tellus at nullam, et iaculis purus consequat tellus sagittis laoreet dolor quis, venenatis cras dictum
            ultrices sollicitudin. Volutpat vestibulum, vulputate interdum donec quis orci sed vitae praesent nunc, enim
            non congue tellus fusce ante. Elit nunc ut enim et, ipsum ut nisl mauris purus aliquet sed maximus odio leo,
            feugiat ac nec fringilla placerat. In donec sem, bibendum sagittis imperdiet fusce vitae lorem ipsum sapien
            lectus, ornare sollicitudin quam at sem.
            <br />
            Adipiscing libero, et nisi diam a ornare venenatis volutpat felis scelerisque bibendum, semper donec
            suspendisse vulputate. Vestibulum purus, imperdiet purus sollicitudin nisl ollicitudin fermentum libero
            vitae, integer id dolor duis id integer. Sollicitudin auctor, vehicula integer accumsan ac nec et nisl vel
            purus tristique, aliquet consequat turpis diam a. Erat quam, commodo mauris pulvinar fusce vitae sit amet
            vitae sodales, nullam magna et accumsan ut. Donec consectetur, rhoncus erat libero proin venenatis libero
            vitae faucibus eget, posuere cras dictum vitae ullamcorper. Dui vel dolor quam, sed ipsum ante ut id ante ac
            nibh in donec justo, erat ligula ac nibh sed.
          </p>
        </>
      }
    >
      <>
        ...Posts Detail Form...#{id} ... {detail?.id}
        <br />
        <PostsDetailForm />
      </>
    </DetailDrawer>
  );
};

export default PostsDetail;
