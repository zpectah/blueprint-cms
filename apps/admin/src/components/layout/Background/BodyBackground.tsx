// Source: https://wweb.dev/resources/blur-background-css-generator

import React from 'react';
import { styled } from '@mui/material';

const BackgroundBase = styled('div')`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(to right, #fb64ff, #ecacd9);
  display: flex;
  flex-grow: 1;
  z-index: -1;
  opacity: 0.25;
`;
const Background0 = styled('div')`
  position: absolute;
  border-radius: 100%;
  height: 0;
  filter: blur(240vw);
  opacity: 0.4;
`;
const Background1 = styled(Background0)`
  background: linear-gradient(132deg, #6f2fcf 0%, #cf742b 100%);
  width: 38%;
  padding-top: 38%;
  left: 28%;
  top: 3%;
  transform: translateX(-50%) translateY(-50%);
`;
const Background2 = styled(Background0)`
  background: linear-gradient(132deg, #ff1add 0%, #e32be3 100%);
  width: 40%;
  padding-top: 40%;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
const Background3 = styled(Background0)`
  background: linear-gradient(132deg, #acfa 0%, #cb860f 100%);
  width: 33%;
  padding-top: 33%;
  left: 72%;
  top: 65%;
  transform: translateX(-50%) translateY(-50%);
`;

const BodyBackground = () => (
  <BackgroundBase>
    <Background1 />
    <Background2 />
    <Background3 />
  </BackgroundBase>
);

export default BodyBackground;
