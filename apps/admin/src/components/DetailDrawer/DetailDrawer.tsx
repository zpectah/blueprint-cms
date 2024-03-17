import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer } from '@mui/material';
import { DetailDrawerProps } from './types';
import { CloseButton } from '../Button';

const DetailDrawer = (props: DetailDrawerProps) => {
  const { id, route, title, subtitle, actions, children, drawerProps } = props;

  const [open, setOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const closeHandler = () => navigate(route);

  useEffect(() => setOpen(!!id), [id]);

  return (
    <Drawer anchor="right" open={open} onClose={closeHandler} {...drawerProps}>
      <div>
        {/* TODO */}
        {title}
        <br />
        {subtitle}
        <CloseButton onClick={closeHandler} />
      </div>
      <div>{children}</div>
      <div>{actions}</div>
    </Drawer>
  );
};

export default DetailDrawer;
