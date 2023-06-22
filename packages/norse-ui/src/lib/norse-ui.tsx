import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface NorseUiProps {}

const StyledNorseUi = styled.div`
  color: pink;
`;

export function NorseUi(props: NorseUiProps) {
  return (
    <StyledNorseUi>
      <h1>Welcome to NorseUi!</h1>
    </StyledNorseUi>
  );
}

export default NorseUi;
