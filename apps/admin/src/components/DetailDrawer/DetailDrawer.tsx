import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer } from '@mui/material';
import { DetailDrawerProps } from './types';

const DetailDrawer = (props: DetailDrawerProps) => {
  const { id, route, title, subtitle, actions, children } = props;

  const [open, setOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => setOpen(!!id), [id]);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => {
        navigate(route);
      }}
    >
      <div>
        {/* TODO */}
        {title}
        <br />
        {subtitle}
      </div>
      <div>{children}</div>
      <div>{actions}</div>
    </Drawer>
  );
};

export default DetailDrawer;
