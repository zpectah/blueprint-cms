import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface TypesProps {}

const StyledTypes = styled.div`
  color: pink;
`;

export function Types(props: TypesProps) {
  return (
    <StyledTypes>
      <h1>Welcome to Types!</h1>
    </StyledTypes>
  );
}

export default Types;
