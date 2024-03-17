import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { ROUTES } from '../../config';
import { DetailDrawer } from '../../components';
import { usePosts } from '../../hooks';

const PostsDetail = () => {
  const { id } = useParams();
  const { getDetail } = usePosts();
  const detailData = getDetail(id);

  return (
    <DetailDrawer
      id={id}
      route={ROUTES.posts.path}
      title="Detail title"
      subtitle="Detail subtitle"
      actions={
        <>
          <Button variant="contained" color="primary" disableElevation>
            Button
          </Button>
          <Button variant="outlined" color="primary" disableElevation>
            Button
          </Button>
        </>
      }
    >
      <>
        ...Posts Detail Form...#{id}
        <pre>
          <code>{JSON.stringify(detailData, null, 2)}</code>
        </pre>
      </>
    </DetailDrawer>
  );
};

export default PostsDetail;
