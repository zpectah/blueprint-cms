import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface AssetsProps {}

const StyledAssets = styled.div`
  color: pink;
`;

export function Assets(props: AssetsProps) {
  return (
    <StyledAssets>
      <h1>Welcome to Assets!</h1>
    </StyledAssets>
  );
}

export default Assets;
