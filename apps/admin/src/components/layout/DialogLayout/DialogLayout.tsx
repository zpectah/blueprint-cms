import React from 'react';
import { WithChildren } from '../../../types';
import { Footer } from '../Footer';

export type DialogLayoutProps = WithChildren & {
  centered?: boolean;
};

const DialogLayout = ({ children, centered }: DialogLayoutProps) => {
  return (
    <div>
      ...DialogLayout... {centered ?? 'centered'}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DialogLayout;
