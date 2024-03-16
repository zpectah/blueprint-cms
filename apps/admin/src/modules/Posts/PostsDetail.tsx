import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { DetailDrawer } from '../../components';

const PostsDetail = () => {
  const { id } = useParams();

  return (
    <DetailDrawer
      id={id}
      route={'/posts'}
      title="Detail title"
      subtitle="Detail subtitle"
      actions={
        <>
          <Button variant="contained">Button</Button>
          <Button variant="contained">Button</Button>
        </>
      }
    >
      <>...Posts Detail...#{id}</>
    </DetailDrawer>
  );
};

export default PostsDetail;
